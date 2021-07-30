import { shortcut } from '@/core/decorator';

import TodolistHeader from './header';
import TodolistList from './list';
import './index.less';

@shortcut()
export default class Todolist extends BI.Widget {
    static xtype = 'my.todolist';

    public props = {
        baseCls: 'my-todolist',
        storageKey: 'fineui.my.todolist',
    };

    private doneListRef: TodolistList;
    private undoneListRef: TodolistList;

    private _getItems(): Todolist.Item[] {
        const { storageKey } = this.options;
        const itemsStr = localStorage.getItem(storageKey) || JSON.stringify([]);

        return JSON.parse(itemsStr);
    }

    private _setItems(items: Todolist.Item[]) {
        const { storageKey } = this.options;
        const itemsStr = JSON.stringify(items);
        localStorage.setItem(storageKey, itemsStr);
        this._populateListRefs();
    }

    private _addItem(item: Todolist.Item) {
        const items = this._getItems();
        items.push(item);
        this._setItems(items);
    }

    private _finishItem(item: Todolist.Item) {
        const items = this._getItems();
        (BI.find(items, { id: item.id }) as Todolist.Item).done = true;
        this._setItems(items);
    }

    private _removeItem(item: Todolist.Item) {
        const items = this._getItems();
        BI.remove(items, (_index: number, curItem: Todolist.Item) => curItem.id === item.id);
        this._setItems(items);
    }

    private _getUndoneItems(): Todolist.Item[] {
        const items = this._getItems();

        return BI.filter(items, (_index, item) => item.done === false);
    }

    private _getDoneItems(): Todolist.Item[] {
        const items = this._getItems();

        return BI.filter(items, (_index, item) => item.done === true);
    }

    private _populateListRefs() {
        this.undoneListRef.populate(this._getUndoneItems());
        this.doneListRef.populate(this._getDoneItems());
    }

    public render() {
        return (
            <BI.VerticalLayout>
                <TodolistHeader
                    listeners={[
                        {
                            eventName: TodolistHeader.EVENT_ADD,
                            action: itemText => {
                                this._addItem({
                                    id: BI.UUID(),
                                    text: itemText,
                                    done: false,
                                });
                            },
                        },
                    ]}
                />
                <TodolistList
                    ref={ref => {
                        this.undoneListRef = ref;
                    }}
                    title="待办"
                    items={this._getUndoneItems()}
                    listeners={[
                        {
                            eventName: TodolistList.EVENT_FINISH,
                            action: item => {
                                this._finishItem(item);
                            },
                        },
                        {
                            eventName: TodolistList.EVENT_REMOVE,
                            action: item => {
                                this._removeItem(item);
                            },
                        },
                    ]}
                />
                <TodolistList
                    ref={ref => {
                        this.doneListRef = ref;
                    }}
                    title="已办"
                    items={this._getDoneItems()}
                    listeners={[
                        {
                            eventName: TodolistList.EVENT_REMOVE,
                            action: item => {
                                this._removeItem(item);
                            },
                        },
                    ]}
                />
            </BI.VerticalLayout>
        );
    }
}
