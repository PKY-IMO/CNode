import { Widget, CustomTree } from '@fui/core';

import { shortcut } from '@/core/decorator';

import MenuNode from './node';
import MenuItem from './item';
import './index.less';

interface itemMap {
    key: string;
    text: string;
    icon: string;
    card?: Widget;
    cards?: itemMap[];
    children?: itemMap[];
}

@shortcut()
export default class Menu extends BI.Widget {
    static xtype = 'app.menu';

    static EVENT_CHANGE = 'EVENT_CHANGE';

    static MAIN_TYPE = 'MAIN_TYPE';
    static SUB_TYPE = 'SUB_TYPE';
    static MAIN_CLASS = 'main';
    static SUB_CLASS = 'sub';

    public props = {
        baseCls: 'app-menu',
        itemType: Menu.SUB_TYPE,
        itemsMap: [],
    };

    private menuRef: CustomTree;

    private _createMenuItems(itemsMap: itemMap[], level: number) {
        const { itemType } = this.options;
        const isMainType = itemType === Menu.MAIN_TYPE;

        return BI.map(itemsMap, (_index, itemMap) => {
            const { key, text, icon, cards, children } = itemMap;
            const value = cards ? BI.map(cards, (_index, item) => item.key).join(',') : key;

            return children ? (
                <MenuNode value={value} text={text} icon={icon} level={level} children={this._createMenuItems(children, level + 1)} />
            ) : (
                <MenuItem isMain={isMainType} value={value} text={text} icon={icon} level={level} />
            );
        });
    }

    public setItemType(value: string) {
        const menuElement = this.menuRef.element;
        switch (value) {
            case Menu.MAIN_TYPE:
                menuElement.addClass(Menu.MAIN_CLASS);
                menuElement.removeClass(Menu.SUB_CLASS);
                break;
            case Menu.SUB_TYPE:
                menuElement.addClass(Menu.SUB_CLASS);
                menuElement.removeClass(Menu.MAIN_CLASS);
                break;
            default:
                break;
        }
    }

    public setItemsMap(value: itemMap[]) {
        const menuItems = this._createMenuItems(value, 0);
        this.menuRef.populate(menuItems);
    }

    public setValue(value: string) {
        this.menuRef.setValue(value);
    }

    public mounted() {
        const { itemType, itemsMap } = this.options;
        this.setItemType(itemType);
        this.setItemsMap(itemsMap);
    }

    public render() {
        return (
            <BI.CustomTree
                ref={ref => {
                    this.menuRef = ref;
                }}
                expander={<BI.Expander isDefaultInit={false} popup={<BI.CustomTree />} />}
                el={<BI.ButtonTree layouts={[<BI.VerticalLayout />]} chooseType={BI.Selection.Single} />}
                listeners={[
                    {
                        eventName: BI.CustomTree.EVENT_CHANGE,
                        action: (value: string) => {
                            const valueOrValues = value.includes(',') ? value.split(',') : value;
                            this.fireEvent(Menu.EVENT_CHANGE, valueOrValues);
                        },
                    },
                ]}
            />
        );
    }
}
