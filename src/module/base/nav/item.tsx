import { shortcut } from '@/core/decorator';

import './index.less';

@shortcut()
export default class NavItem extends BI.BasicButton {
    static xtype = 'app.nav_item';

    static EVENT_CLOSE = 'EVENT_CLOSE';

    public props = {
        baseCls: 'app-nav-item',
        value: '',
        text: '',
        closable: false,
    };

    public render() {
        const { value, text, closable } = this.options;

        return (
            <BI.VerticalAdaptLayout hgap={16} height={36}>
                <BI.Text cls="text" text={text} />
                <BI.IconButton
                    cls="icon close-font"
                    width={16}
                    height={16}
                    invisible={!closable}
                    stopPropagation={true}
                    handler={() => {
                        this.fireEvent(NavItem.EVENT_CLOSE, value);
                    }}
                />
            </BI.VerticalAdaptLayout>
        );
    }
}
