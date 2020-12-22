import { Label, VerticalLayout } from '@fui/core';
import { shortcut } from "../../core/typescript/decorator";
import "./list.less";

@shortcut()
export class List extends BI.Widget {
    static xtype = "my.todolist.list";

    private count: Label;
    private list: VerticalLayout;

    props = {
        baseCls: "my-todolist-list",
        text: "正在进行",
        items: [],
    }

    render() {
        const { text, items } = this.options;

        return {
            type: BI.VerticalLayout.xtype,
            items: [
                {
                    el: {
                        type: BI.VerticalAdaptLayout.xtype,
                        height: 40,
                        items: [
                            {
                                type: BI.Label.xtype,
                                cls: "my-todolist-list-text",
                                textAlign: "left",
                                text,
                                width: 580,
                            }, {
                                type: BI.CenterAdaptLayout.xtype,
                                cls: "my-todolist-list-count-container",
                                width: 20,
                                height: 20,
                                items: [
                                    {
                                        el: {
                                            type: BI.Label.xtype,
                                            ref: (_ref: Label) => {
                                                this.count = _ref;
                                            },
                                            text: 0,
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                }, {
                    type: BI.VerticalLayout.xtype,
                    vgap: 10,
                    ref: (_ref: VerticalLayout) => {
                        this.list = _ref;
                    },
                    items: this.createItems(items),
                },
            ],
        };
    }

    private createItems(items: Item[]) {
        return items.map(item => {
            return BI.extend(item, {
                type: BI.MultiSelectItem.xtype,
                selected: item.done,
                disabled: item.done,
                listeners: [
                    {
                        eventName: "EVENT_CHANGE",
                        action: (v: any) => {
                            this.fireEvent("EVENT_CHANGE", v);
                        },
                    },
                ],
            });
        })
    }

    private setCount(count: number) {
        this.count.setText(`${count}`);
    }

    populate(items: []) {
        this.list.populate(this.createItems(items));
        this.setCount(items.length);
    }
}

interface Item {
    done: boolean,
}
