import { Editor, Button } from '@fui/core';

import { shortcut } from '@/core/decorator';

import './index.less';

@shortcut()
export default class TodolistHeader extends BI.Widget {
    static xtype = 'my.todolist_header';

    static EVENT_ADD = 'EVENT_ADD';

    public props = {
        baseCls: 'my-todolist-header',
    };

    private editorRef: Editor;
    private buttonRef: Button;

    public render() {
        return (
            <BI.CenterAdaptLayout>
                <BI.LeftRightVerticalAdaptLayout
                    width={720}
                    height={40}
                    lhgap={24}
                    rhgap={24}
                    items={{
                        left: [<BI.Label cls="title" text="FineUI Todolist" />],
                        right: [
                            <BI.Editor
                                ref={ref => {
                                    this.editorRef = ref;
                                }}
                                cls="editor"
                                width={300}
                                height={28}
                                allowBlank
                                watermark="请填写待办事项"
                                listeners={[
                                    {
                                        eventName: BI.Editor.EVENT_CHANGE,
                                        action: () => {
                                            const editorValue = this.editorRef.getValue();
                                            const buttonEnabled = editorValue.length > 0;
                                            this.buttonRef.setEnable(buttonEnabled);
                                        },
                                    },
                                ]}
                            />,
                            <BI.Button
                                ref={ref => {
                                    this.buttonRef = ref;
                                }}
                                cls="button"
                                height={28}
                                disabled
                                iconCls="plus-font"
                                text="添加"
                                handler={() => {
                                    const editorValue = this.editorRef.getValue();
                                    this.fireEvent(TodolistHeader.EVENT_ADD, editorValue);
                                    this.editorRef.setValue('');
                                    this.buttonRef.setEnable(false);
                                }}
                            />,
                        ],
                    }}
                />
            </BI.CenterAdaptLayout>
        );
    }
}
