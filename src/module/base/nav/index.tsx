import { VirtualGroup } from '@fui/core';

import { shortcut } from '@/core/decorator';

import NavItem from './item';
import './index.less';

interface itemMap {
    key: string;
    text: string;
    closable: boolean;
}

@shortcut()
export default class Nav extends BI.Widget {
    static xtype = 'app.nav';

    static EVENT_CHANGE = 'EVENT_CHANGE';
    static EVENT_CLOSE = 'EVENT_CLOSE';

    static BLOCK_TYPE = 'BLOCK_TYPE';
    static UNDERLINE_TYPE = 'UNDERLINE_TYPE';
    static BLOCK_CLASS = 'block';
    static UNDERLINE_CLASS = 'underline';

    public props = {
        baseCls: 'app-nav',
        itemType: Nav.BLOCK_TYPE,
        itemsMap: [],
    };

    private navRef: VirtualGroup;

    private _createNavItems(itemsMap: itemMap[]) {
        return BI.map(itemsMap, (_index, itemMap) => {
            const { key, text, closable } = itemMap;

            return (
                <NavItem
                    value={key}
                    text={text}
                    closable={closable}
                    listeners={[
                        {
                            eventName: NavItem.EVENT_CLOSE,
                            action: (value: string) => {
                                this.fireEvent(Nav.EVENT_CLOSE, value);
                            },
                        },
                    ]}
                />
            );
        });
    }

    public setItemType(value: string) {
        const navElement = this.navRef.element;
        switch (value) {
            case Nav.BLOCK_TYPE:
                navElement.addClass(Nav.BLOCK_CLASS);
                navElement.removeClass(Nav.UNDERLINE_CLASS);
                break;
            case Nav.UNDERLINE_TYPE:
                navElement.addClass(Nav.UNDERLINE_CLASS);
                navElement.removeClass(Nav.BLOCK_CLASS);
                break;
            default:
                break;
        }
    }

    public setItemsMap(value: itemMap[]) {
        const navItems = this._createNavItems(value);
        this.navRef.populate(navItems);
    }

    public setValue(value: string) {
        this.navRef.setValue(value);
    }

    public mounted() {
        const { itemType, itemsMap } = this.options;
        this.setItemType(itemType);
        this.setItemsMap(itemsMap);
    }

    public render() {
        return (
            <BI.ButtonGroup
                ref={ref => {
                    this.navRef = ref;
                }}
                layouts={[<BI.VerticalAdaptLayout height={36} />]}
                listeners={[
                    {
                        eventName: BI.ButtonGroup.EVENT_CHANGE,
                        action: value => {
                            this.fireEvent(Nav.EVENT_CHANGE, value);
                        },
                    },
                ]}
            />
        );
    }
}
