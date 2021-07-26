import { shortcut, store } from '@/core/decorator';
import LayoutSiderModel from '@/model/layout/sider';
import Menu from '@/module/base/menu';
import CONFIGS from '@/const/configs';

import './index.less';

@shortcut()
@store(LayoutSiderModel)
export default class LayoutSider extends BI.Widget {
    static xtype = 'app.layout_sider';

    public props = {
        baseCls: 'app-layout-sider',
    };

    public watch = {
        openedCards: () => {
            this._updateSubMenuValue();
        },
        activeCard: () => {
            this._updateSubMenuValue();
        },
    };

    private store: LayoutSiderModel;
    private mainMenuRef: Menu;
    private subMenuRef: Menu;

    private _updateSubMenuItemsMap(value) {
        const routesMap = BI.find(CONFIGS.ROUTES_MAP, { key: value });
        const subMenuItemsMap = BI.map(routesMap.children, (_index, item) => {
            const { key, text, icon, children, card, cards } = item;

            return {
                key,
                text,
                icon,
                children,
                card,
                cards,
            };
        });
        this.subMenuRef.setItemsMap(subMenuItemsMap);
    }

    private _updateSubMenuValue() {
        const { openedCards, activeCard } = this.store.model;
        const mainMenuRouteMap = BI.find(CONFIGS.ROUTES_MAP, { key: openedCards[0] });
        if (openedCards.length === 1) {
            this.subMenuRef.setValue('');
        }
        if (mainMenuRouteMap && mainMenuRouteMap.type === 'single') {
            this.subMenuRef.setValue(activeCard);
        }
    }

    public mounted() {
        const defaultValue = CONFIGS.ROUTES_MAP[0].key;
        this.mainMenuRef.setValue(defaultValue);
        this.mainMenuRef.fireEvent(Menu.EVENT_CHANGE, defaultValue);
    }

    public render() {
        const mainMenuItemsMap = BI.map(CONFIGS.ROUTES_MAP, (_index, item) => {
            const { key, text, icon } = item;

            return {
                key,
                text,
                icon,
            };
        });

        return (
            <BI.HTapeLayout columnSize={[CONFIGS.MAIN_MENU_WIDTH, CONFIGS.SUB_MENU_WIDTH]}>
                {/* 一级菜单 */}
                <Menu
                    ref={ref => {
                        this.mainMenuRef = ref;
                    }}
                    cls="app-layout-sider-menu"
                    itemType={Menu.MAIN_TYPE}
                    itemsMap={mainMenuItemsMap}
                    listeners={[
                        {
                            eventName: Menu.EVENT_CHANGE,
                            action: value => {
                                this.store.closeAllCards();
                                this.store.openSingleCard(value);
                                this._updateSubMenuItemsMap(value);
                            },
                        },
                    ]}
                />
                {/* 二级菜单 */}
                <Menu
                    ref={ref => {
                        this.subMenuRef = ref;
                    }}
                    cls="app-layout-sider-menu"
                    itemType={Menu.SUB_TYPE}
                    itemsMap={[]}
                    listeners={[
                        {
                            eventName: Menu.EVENT_CHANGE,
                            action: valueOrValues => {
                                if (!valueOrValues) return;
                                BI.isArray(valueOrValues) ? this.store.openMultipleCards(valueOrValues) : this.store.openSingleCard(valueOrValues);
                            },
                        },
                    ]}
                />
            </BI.HTapeLayout>
        );
    }
}
