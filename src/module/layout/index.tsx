import { shortcut, store } from '@/core/decorator';
import LayoutModel from '@/model/layout';
import CONFIGS from '@/const/configs';

import LayoutHeader from './header';
import LayoutSider from './sider';
import LayoutContent from './content';
import './index.less';

@shortcut()
@store(LayoutModel)
export default class Layout extends BI.Widget {
    static xtype = 'app.layout';

    public props = {
        baseCls: 'app-layout',
    };

    public render() {
        const headerHeight = CONFIGS.HEADER_HEIGHT;
        const siderWidth = CONFIGS.MAIN_MENU_WIDTH + CONFIGS.SUB_MENU_WIDTH;

        return (
            <BI.VTapeLayout rowSize={[headerHeight, 'fill']}>
                <LayoutHeader />
                <BI.HTapeLayout cls="app-layout-main" columnSize={[siderWidth, 'fill']}>
                    <LayoutSider />
                    <LayoutContent />
                </BI.HTapeLayout>
            </BI.VTapeLayout>
        );
    }
}
