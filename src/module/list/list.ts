import { shortcut } from "../../core/typescript/decorator";
import { VerticalXtype, LabelXtype, CenterAdaptXtype, MultiSelectItemXtype, VerticalAdaptXtype } from "../../core/typescript/ui";
import "./list.less";

@shortcut()
export class List extends BI.Widget {
    static xtype = "my.todolist.list";

    private count: any;
    private list: any;

    props = {
        baseCls: "my-todolist-list",
        text: "正在进行",
        items: [],
    }

    render() {
        const { text, items } = this.options;

        return {
            type: VerticalXtype,
            items: [
                {
                    el: {
                        type: VerticalAdaptXtype,
                        height: 40,
                        items: [
                            {
                                type: LabelXtype,
                                cls: "my-todolist-list-text",
                                textAlign: "left",
                                text,
                                width: 580,
                            }, {
                                type: CenterAdaptXtype,
                                cls: "my-todolist-list-count-container",
                                width: 20,
                                height: 20,
                                items: [
                                    {
                                        el: {
                                            type: LabelXtype,
                                            ref: (_ref: any) => {
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
                    type: VerticalXtype,
                    vgap: 10,
                    ref: (_ref: any) => {
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
                type: MultiSelectItemXtype,
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
        this.count.setText(count);
    }

    populate(items: []) {
        this.list.populate(this.createItems(items));
        this.setCount(items.length);
    }
}

interface Item {
    done: boolean,
}
