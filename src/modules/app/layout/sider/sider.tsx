import { shortcut, store } from '@core/decorator';
import { Menu, MenuItemStyle } from '@base/menu/menu';
import { RouteType, RouteInfo, ROUTE_INFOS } from '@/routes';
import LayoutSiderModel from './sider.model';
import LayoutConstant from '../layout.constant';
import './sider.less';

/**
 * 应用布局的侧栏，包括一级菜单和二级菜单
 */
@shortcut()
@store(LayoutSiderModel)
export class LayoutSider extends BI.Widget {
    static xtype = 'app.layout_sider';

    public props = {
        baseCls: 'app-layout-sider',
    };

    public watch = {
        openedCards: () => {
            this.updateSubMenuValue();
        },
        activeCard: () => {
            this.updateSubMenuValue();
        },
    };

    private model: LayoutSiderModel['model'];
    private store: LayoutSiderModel['store'];
    private mainMenuRef: Menu;
    private subMenuRef: Menu;

    /**
     * 更新二级菜单的itemInfos
     * @param value 当前选中的一级菜单选项的value值
     */
    private updateSubMenuItemInfos(value: string) {
        const { children: routeInfos } = BI.find(ROUTE_INFOS, { value }) as RouteInfo;
        const subMenuItemInfos = BI.map(routeInfos, (_index, routeInfo) => {
            const { value, text, icon, card, cards, children } = routeInfo;

            return {
                value,
                text,
                icon,
                card,
                cards,
                children,
            };
        });
        this.subMenuRef.setItemInfos(subMenuItemInfos);
    }

    /**
     * 更新二级菜单的value
     */
    private updateSubMenuValue() {
        const { openedCards, activeCard } = this.model;
        const mainRouteInfo = BI.find(ROUTE_INFOS, { value: openedCards[0] });
        if (openedCards.length === 1) {
            this.subMenuRef.setValue('');
        }
        if (mainRouteInfo && mainRouteInfo.type === RouteType.Single) {
            this.subMenuRef.setValue(activeCard);
        }
    }

    public mounted() {
        const defaultValue = ROUTE_INFOS[0].value;
        this.mainMenuRef.setValue(defaultValue);
        this.mainMenuRef.fireEvent(Menu.EVENT.CHANGE, defaultValue);
    }

    public render() {
        const { MAIN_MENU_WIDTH, SUB_MENU_WIDTH } = LayoutConstant;
        const mainMenuItemInfos = BI.map(ROUTE_INFOS, (_index, routeInfo) => {
            const { value, text, icon } = routeInfo;

            return {
                value,
                text,
                icon,
            };
        });

        return (
            <BI.HTapeLayout columnSize={[MAIN_MENU_WIDTH, SUB_MENU_WIDTH]}>
                {/* 一级菜单 */}
                <Menu
                    ref={ref => {
                        this.mainMenuRef = ref;
                    }}
                    cls="app-layout-sider-main-menu"
                    itemInfos={mainMenuItemInfos}
                    itemStyle={MenuItemStyle.Main}
                    listeners={[
                        {
                            eventName: Menu.EVENT.CHANGE,
                            action: (value: string) => {
                                this.store.closeAllCards();
                                this.store.openSingleCard(value);
                                this.updateSubMenuItemInfos(value);
                            },
                        },
                    ]}
                />
                {/* 二级菜单 */}
                <Menu
                    ref={ref => {
                        this.subMenuRef = ref;
                    }}
                    cls="app-layout-sider-sub-menu bi-background"
                    itemInfos={[]}
                    itemStyle={MenuItemStyle.Sub}
                    listeners={[
                        {
                            eventName: Menu.EVENT.CHANGE,
                            action: (valueOrValues: string | string[]) => {
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
