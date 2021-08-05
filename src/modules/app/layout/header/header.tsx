import { shortcut } from '@core/decorator';
import LayoutConstant from '../layout.constant';
import './header.less';

// 测试用的用户信息
const userInfo = {
    name: 'Finer',
    avatarSrc: 'https://code.fanruan.com/img/gitea-sm.png',
};

/**
 * 应用布局的顶栏，包括应用logo、标题和用户信息
 */
@shortcut()
export class LayoutHeader extends BI.Widget {
    static xtype = 'app.layout_header';

    public props = {
        baseCls: 'app-layout-header',
    };

    public render() {
        const { APP_TITLE_TEXT, MAIN_MENU_WIDTH, HEADER_HEIGHT } = LayoutConstant;

        return (
            <BI.LeftRightVerticalAdaptLayout
                rhgap={24}
                items={{
                    left: [
                        <BI.CenterAdaptLayout cls="logo bi-high-light-background" width={MAIN_MENU_WIDTH} height={HEADER_HEIGHT}>
                            <BI.IconLabel cls="logo-background" width={32} height={32} />
                        </BI.CenterAdaptLayout>,
                        <BI.Text cls="title" hgap={8} text={APP_TITLE_TEXT} />,
                    ],
                    right: [
                        <BI.IconButton
                            cls="toast-success-font"
                            width={24}
                            handler={() => {
                                BI.Msg.toast(`您点击了第一个图标`);
                            }}
                        />,
                        <BI.IconButton
                            cls="toast-error-font"
                            width={24}
                            handler={() => {
                                BI.Msg.toast(`您点击了第二个图标`);
                            }}
                        />,
                        <BI.VerticalAdaptLayout cls="user">
                            <BI.Img cls="avatar" width={24} rgap={8} src={userInfo.avatarSrc} />
                            <BI.Text cls="name" text={userInfo.name} />
                        </BI.VerticalAdaptLayout>,
                    ],
                }}
            />
        );
    }
}
