import { shortcut } from '@/core/decorator';

@shortcut()
export default class LayoutHeaderUser extends BI.Widget {
    static xtype = 'app.layout_header_user';

    public props = {
        baseCls: 'app-layout-header-user',
        name: '',
        avatarSrc: '',
    };

    public render() {
        const { name, avatarSrc } = this.options;

        return (
            <BI.VerticalAdaptLayout>
                <BI.Img cls="avatar" width={24} height={24} rgap={8} src={avatarSrc} />
                <BI.Text cls="name" text={name} />
            </BI.VerticalAdaptLayout>
        );
    }
}
