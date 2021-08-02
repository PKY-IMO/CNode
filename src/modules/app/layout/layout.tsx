import { shortcut, store } from '@core/decorator';
import { LayoutHeader } from './header/header';
import { LayoutSider } from './sider/sider';
import { LayoutContent } from './content/content';
import LayoutConstant from './layout.constant';
import LayoutModel from './layout.model';
import './layout.less';

/**
 * 应用布局
 */
@shortcut()
@store(LayoutModel)
export default class Layout extends BI.Widget {
    static xtype = 'app.layout';

    public props = {
        baseCls: 'app-layout',
    };

    public render() {
        const { HEADER_HEIGHT, MAIN_MENU_WIDTH, SUB_MENU_WIDTH } = LayoutConstant;

        return (
            <BI.VTapeLayout rowSize={[HEADER_HEIGHT, 'fill']}>
                <LayoutHeader />
                <BI.HTapeLayout cls="app-layout-body" columnSize={[MAIN_MENU_WIDTH + SUB_MENU_WIDTH, 'fill']}>
                    <LayoutSider />
                    <LayoutContent />
                </BI.HTapeLayout>
            </BI.VTapeLayout>
        );
    }
}
