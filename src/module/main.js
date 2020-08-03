import { shortcut } from "../core/javascript/decorator";
import { VtapeXtype, HorizontalAutoXtype } from "../core/javascript/ui";
import { ToDoListHeader } from "./header/header";
import { List } from "./list/list";
import "./main.less";

@shortcut()
export class ToDoList extends BI.Widget {
    static xtype = "my.todolist";

    props = {
        baseCls: "fine-to-do-list",
    }

    beforeCreate() {
        this.list = localStorage.getItem("fine-todolist") ? JSON.parse(localStorage.getItem("fine-todolist")) : [];
    }

    render() {
        return {
            type: VtapeXtype,
            items: [
                {
                    el: {
                        type: ToDoListHeader.xtype,
                        listeners: [
                            {
                                eventName: "EVENT_ADD",
                                action: v => {
                                    this.addToDo(v);
                                },
                            },
                        ],
                        height: 40,
                    },
                    height: 40,
                }, {
                    type: HorizontalAutoXtype,
                    cls: "my-todolist-background",
                    items: [
                        {
                            el: {
                                type: List.xtype,
                                ref: _ref => {
                                    this.todolist = _ref;
                                },
                                items: this._getNeedTodoList(),
                                text: "正在进行",
                                listeners: [
                                    {
                                        eventName: "EVENT_CHANGE",
                                        action: v => {
                                            this.finishTodo(v);
                                        },
                                    },
                                ],
                                width: 600,
                            },
                        }, {
                            el: {
                                type: List.xtype,
                                text: "已经完成",
                                items: this._getAlreadyDoneList(),
                                ref: _ref => {
                                    this.donelist = _ref;
                                },
                                width: 600,
                            },
                        },
                    ],
                }],
        };
    }

    _updateLocalStorage() {
        localStorage.setItem("fine-todolist", JSON.stringify(this.list));
    }

    _getNeedTodoList() {
        return BI.filter(this.list, (index, item) => !item.done);
    }

    _getAlreadyDoneList() {
        return BI.filter(this.list, (index, item) => item.done);
    }

    addToDo(text) {
        this.list.push({
            value: BI.UUID(),
            text,
            done: false,
        });
        this.todolist.populate(this._getNeedTodoList());
        this._updateLocalStorage();
    }

    finishTodo(v) {
        BI.some(this.list, (index, item) => {
            if (item.value === v) {
                item.done = true;
            }
        });
        this.todolist.populate(this._getNeedTodoList());
        this.donelist.populate(this._getAlreadyDoneList());
        this._updateLocalStorage();
    }
}
