import { IconLabel } from '@fui/core';

import { shortcut } from '@/core/decorator';

@shortcut()
export default class MenuNode extends BI.NodeButton {
    static xtype = 'app.menu_node';

    static ARROW_COLLAPSE_CLASS = 'column-next-page-h-font';
    static ARROW_EXPAND_CLASS = 'column-pre-page-h-font';

    public props = {
        baseCls: 'app-menu-node',
        value: '',
        text: '',
        icon: '',
        level: 0,
        children: [],
    };

    private arrowRef: IconLabel;

    public setOpened(value: boolean) {
        BI.NodeButton.prototype.setOpened.apply(this, arguments);
        // 改变箭头图标的class
        const arrowEl = this.arrowRef.element;
        if (value) {
            arrowEl.addClass(MenuNode.ARROW_EXPAND_CLASS);
            arrowEl.removeClass(MenuNode.ARROW_COLLAPSE_CLASS);
        } else {
            arrowEl.addClass(MenuNode.ARROW_COLLAPSE_CLASS);
            arrowEl.removeClass(MenuNode.ARROW_EXPAND_CLASS);
        }
    }

    public mounted() {
        this.setOpened(false);
    }

    public render() {
        const { text, icon, level } = this.options;

        return (
            <BI.LeftRightVerticalAdaptLayout
                height={36}
                lhgap={8}
                rhgap={16}
                items={{
                    left: [<BI.IconLabel cls={icon} lgap={8 + 24 * level} />, <BI.Text text={text} />],
                    right: [
                        <BI.IconLabel
                            ref={ref => {
                                this.arrowRef = ref;
                            }}
                        />,
                    ],
                }}
            />
        );
    }
}
