import { Tab } from '@fui/core';

import { shortcut, store } from '@/core/decorator';
import LayoutContentModel from '@/model/layout/content';
import Nav from '@/module/base/nav';
import CONFIGS from '@/const/configs';

import './index.less';

@shortcut()
@store(LayoutContentModel)
export default class LayoutContent extends BI.Widget {
    static xtype = 'app.layout_content';

    public props = {
        baseCls: 'app-layout-content',
    };

    public watch = {
        openedCards: (values: string[]) => {
            this._updateNavItemsMap(values);
            this._updateNavValue();
        },
        activeCard: value => {
            this._updateNavItemType(value);
            this._updateNavValue();
            this.tabRef.setSelect(value);
        },
    };

    private store: LayoutContentModel;
    private navRef: Nav;
    private tabRef: Tab;
    private contentsMap: {};

    private _initContentsMap() {
        this.contentsMap = {};
        this._createContentsMap([{ key: '' }, ...CONFIGS.ROUTES_MAP]);
    }

    private _createContentsMap(routesMap, closable = false) {
        for (const routeMap of routesMap) {
            const { type, key, text, children, cards } = routeMap;
            if (type) {
                closable = type === 'single';
            }
            this.contentsMap[key] = {
                type,
                key,
                text: type ? '首页' : text,
                closable: type ? false : closable,
                card: routeMap.card ? <routeMap.card /> : <BI.Layout />,
            };
            if (children) {
                this._createContentsMap(children, closable);
            }
            if (cards) {
                this._createContentsMap(cards, closable);
            }
        }
    }

    private _updateNavItemType(value: string) {
        const { type } = this.contentsMap[value];
        const itemTypesMap = {
            single: Nav.BLOCK_TYPE,
            multiple: Nav.UNDERLINE_TYPE,
        };
        const itemType = itemTypesMap[type];
        if (itemType) {
            this.navRef.setItemType(itemType);
        }
    }

    private _updateNavItemsMap(values: string[]) {
        const itemsMap = BI.map(values, (_index, item) => this.contentsMap[item]);
        this.navRef.setItemsMap(itemsMap);
    }

    private _updateNavValue() {
        const { activeCard } = this.store.model;
        this.navRef.setValue(activeCard);
    }

    public init() {
        this._initContentsMap();
    }

    public render() {
        return (
            <BI.VTapeLayout rowSize={[36, 'fill']}>
                <Nav
                    ref={ref => {
                        this.navRef = ref;
                    }}
                    itemType={Nav.UNDERLINE_TYPE}
                    itemsMap={[]}
                    listeners={[
                        {
                            eventName: Nav.EVENT_CHANGE,
                            action: value => {
                                this.store.changeCard(value);
                            },
                        },
                        {
                            eventName: Nav.EVENT_CLOSE,
                            action: value => {
                                this.store.closeCard(value);
                            },
                        },
                    ]}
                />
                <BI.Tab
                    ref={ref => {
                        this.tabRef = ref;
                    }}
                    cardCreator={key => this.contentsMap[key].card}
                    showIndex=""
                />
            </BI.VTapeLayout>
        );
    }
}
