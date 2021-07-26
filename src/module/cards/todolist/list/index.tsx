import { Label, VirtualGroup } from '@fui/core';

import { shortcut } from '@/core/decorator';

import './index.less';

@shortcut()
export default class TodolistList extends BI.Widget {
    static xtype = 'my.todolist_list';

    static EVENT_FINISH = 'EVENT_FINISH';
    static EVENT_REMOVE = 'EVENT_REMOVE';

    public props = {
        baseCls: 'my-todolist-list',
        title: '',
        items: [],
    };

    private countRef: Label;
    private itemsRef: VirtualGroup;

    private _populateCountRef(count: number) {
        this.countRef.setText(`${count}`);
    }

    private _populateItemsRef(items: Todolist.Item[]) {
        const itemsWidget = BI.map(items, (_index, item) => (
            <BI.VerticalAdaptLayout cls="item" height={32}>
                <BI.MultiSelectItem
                    cls="check"
                    width={36}
                    selected={item.done}
                    disabled={item.done}
                    listeners={[
                        {
                            eventName: BI.MultiSelectItem.EVENT_CHANGE,
                            action: () => {
                                this.fireEvent(TodolistList.EVENT_FINISH, item);
                            },
                        },
                    ]}
                />
                <BI.Label cls="text" text={item.text} />
                <BI.IconButton
                    cls="close close-ha-font"
                    width={36}
                    handler={() => {
                        this.fireEvent(TodolistList.EVENT_REMOVE, item);
                    }}
                />
            </BI.VerticalAdaptLayout>
        ));
        this.itemsRef.populate(itemsWidget);
    }

    public populate(items: Todolist.Item[]) {
        this._populateCountRef(items.length);
        this._populateItemsRef(items);
    }

    public mounted() {
        const { items } = this.options;
        this.populate(items);
    }

    public render() {
        const { title } = this.options;

        return (
            <BI.VerticalLayout horizontalAlign="center">
                <BI.LeftRightVerticalAdaptLayout
                    cls="my-todolist-list-header"
                    width={720}
                    height={48}
                    lhgap={24}
                    rhgap={24}
                    items={{
                        left: [<BI.Label cls="title" height={24} text={title} />],
                        right: [
                            <BI.Label
                                ref={ref => {
                                    this.countRef = ref;
                                }}
                                cls="count"
                                width={24}
                                height={24}
                                text="0"
                            />,
                        ],
                    }}
                />
                <BI.VirtualGroup
                    ref={ref => {
                        this.itemsRef = ref;
                    }}
                    cls="my-todolist-list-items"
                    layouts={[<BI.VerticalLayout width={720} hgap={24} />]}
                />
            </BI.VerticalLayout>
        );
    }
}
