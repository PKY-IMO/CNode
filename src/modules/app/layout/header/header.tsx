import { shortcut } from '@core/decorator';
import { Menu } from '../menu/menu';
import './header.less';

// 测试用的用户信息
// const userInfo = {
//     name: 'Finer',
//     avatarSrc: 'https://code.fanruan.com/img/gitea-sm.png',
// };

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
        // const {HEADER_HEIGHT, HEADER_WIDTH, HEADER_MENU_TEXT } = LayoutConstant;

        return (
            <BI.HorizontalAdaptLayout cls="app-layout-header"
                items={[
                    <BI.LeftRightVerticalAdaptLayout
                    cls="container"
                    items={{
                        left: [
                            <BI.CenterAdaptLayout cls="logo" width={160} height={50}>
                                <BI.IconLabel cls="logo-background" width={120} height={28} />
                            </BI.CenterAdaptLayout>,
                            <BI.VerticalAdaptLayout cls="search" width={233} height={26} tgap={2}>
                                <BI.IconLabel cls="search-font" lgap={5} rgap={2} height={20}></BI.IconLabel>
                                <BI.Input width={200} height={20}></BI.Input>
                            </BI.VerticalAdaptLayout>
                        ],
                        right: [
                            <Menu/>
                        ],
                    }}
                />
                ]}
            />

        );
    }
}
