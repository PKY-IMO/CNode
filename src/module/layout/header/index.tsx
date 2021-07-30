import { shortcut, store } from '@/core/decorator';
import LayoutHeaderModel from '@/model/layout/header';
import CONFIGS from '@/const/configs';

import LayoutHeaderUser from './user';
import './index.less';

@shortcut()
@store(LayoutHeaderModel)
export default class LayoutHeader extends BI.Widget {
    static xtype = 'app.layout_header';

    public props = {
        baseCls: 'app-layout-header',
    };

    public render() {
        const userName = 'WangChuan';
        const userAvatarSrc = 'https://qn.wangchuan.cc/avatar.png';

        return (
            <BI.LeftRightVerticalAdaptLayout
                rhgap={40}
                items={{
                    left: [
                        <BI.CenterAdaptLayout cls="logo" width={CONFIGS.MAIN_MENU_WIDTH} height={CONFIGS.HEADER_HEIGHT}>
                            <BI.Img width={32} height={32} src={CONFIGS.APP_LOGO_SRC} />
                        </BI.CenterAdaptLayout>,
                        <BI.Label cls="title" hgap={8} text={CONFIGS.APP_TITLE_TEXT} />,
                    ],
                    right: [
                        <BI.IconButton
                            cls="toast-success-font"
                            handler={() => {
                                BI.Msg.toast(`您点击了第一个图标`);
                            }}
                        />,
                        <BI.IconButton
                            cls="toast-error-font"
                            handler={() => {
                                BI.Msg.toast(`您点击了第二个图标`);
                            }}
                        />,
                        <LayoutHeaderUser name={userName} avatarSrc={userAvatarSrc} />,
                    ],
                }}
            />
        );
    }
}
