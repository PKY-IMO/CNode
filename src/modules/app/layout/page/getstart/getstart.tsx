import { shortcut} from '@core/decorator';
import { LayoutHeader } from '../../header/header';
import { Start } from '../../main/start/start';
import { Footer } from '../../footer/footer';

import '../../layout.less';

/**
 * 应用布局
 */
@shortcut()
export default class StartPage extends BI.Widget {
    static xtype = 'app.cnode_start';

    public props = {
        baseCls: 'app-layout',
    };

    public render() {

        return (
            <BI.VerticalLayout cls='app-layout'>
                <LayoutHeader/>
                <Start />
                <Footer />
            </BI.VerticalLayout>
        );
    }
}
