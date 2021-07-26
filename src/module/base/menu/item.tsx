import { shortcut } from '@/core/decorator';

@shortcut()
export default class MenuItem extends BI.BasicButton {
    static xtype = 'app.menu_item';

    public props = {
        baseCls: 'app-menu-item',
        isMain: false,
        value: '',
        text: '',
        icon: '',
        level: 0,
    };

    private _createMainMenuItem() {
        const { text, icon } = this.options;

        return (
            <BI.VerticalLayout>
                <BI.Layout height={18} />
                <BI.VerticalLayout cls="area">
                    <BI.IconLabel cls={`${icon} icon`} height={36} />
                    <BI.Label cls="text" text={text} height={36} />
                </BI.VerticalLayout>
                <BI.Layout height={18} />
            </BI.VerticalLayout>
        );
    }

    private _createSubMenuItem() {
        const { text, icon, level } = this.options;

        return (
            <BI.VerticalAdaptLayout height={36} hgap={8}>
                <BI.IconLabel cls={icon} lgap={8 + 24 * level} />
                <BI.Text text={text} />
            </BI.VerticalAdaptLayout>
        );
    }

    public render() {
        const { isMain } = this.options;

        return isMain ? this._createMainMenuItem() : this._createSubMenuItem();
    }
}
