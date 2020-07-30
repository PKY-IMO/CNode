import { shortcut } from "../../core/decorator";
import { VerticalXtype, LabelXtype, CenterAdaptXtype, MultiSelectItemXtype, VerticalAdaptXtype } from "../../core/ui";
import "./list.less";

@shortcut()
export class List extends BI.Widget {
    static xtype = "my.todolist.list";

    props = {
        baseCls: "my-todolist-list",
        text: "正在进行",
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
                                            ref: _ref => {
                                                this.count = _ref;
                                            },
                                            text: "0",
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                }, {
                    type: VerticalXtype,
                    vgap: 10,
                    ref: _ref => {
                        this.list = _ref;
                    },
                    items: this._createItems(items),
                },
            ],
        };
    }

    _createItems(items) {
        return BI.map(items, (index, item) =>
            BI.extend(item, {
                type: MultiSelectItemXtype,
                selected: item.done,
                disabled: item.done,
                listeners: [
                    {
                        eventName: "EVENT_CHANGE",
                        action: v => {
                            this.fireEvent("EVENT_CHANGE", v);
                        },
                    },
                ],
            }),
        );
    }

    _setCount(count) {
        this.count.setText(count);
    }

    populate(items) {
        this.list.populate(this._createItems(items));
        this._setCount(items.length);
    }
}
