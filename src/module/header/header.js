import { shortcut } from "../../core/javascript/decorator";
import { HorizontalAutoXtype, LeftRightVerticalAdaptLayoutXtype, LabelXtype, EditorXtype } from "../../core/javascript/ui";
import "./header.less";

@shortcut()
export class ToDoListHeader extends BI.Widget {
    static xtype = "my.todolist.header";

    props = {
        baseCls: "my-todolist-header",
    }

    render() {
        const { height } = this.options;

        return {
            type: HorizontalAutoXtype,
            items: [{
                el: {
                    type: LeftRightVerticalAdaptLayoutXtype,
                    width: 600,
                    height: 40,
                    items: {
                        left: [
                            {
                                el: {
                                    type: LabelXtype,
                                    cls: "my-todolist-title",
                                    text: "FineUI ToDoList",
                                    height,
                                },
                            },
                        ],
                        right: [
                            {
                                el: {
                                    type: EditorXtype,
                                    ref: _ref => {
                                        this.editor = _ref;
                                    },
                                    allowBlank: true,
                                    cls: "my-todolist-header-editor",
                                    watermark: "添加ToDo",
                                    width: 300,
                                    height: 24,
                                    listeners: [
                                        {
                                            eventName: "EVENT_ENTER",
                                            action: () => {
                                                this.fireEvent("EVENT_ADD", this.editor.getValue());
                                                this.editor.setValue("");
                                            },
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
            }],
        };
    }
}
