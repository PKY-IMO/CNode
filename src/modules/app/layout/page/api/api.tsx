import { shortcut } from '@core/decorator';
import { LayoutHeader } from '../../header/header';
import { API } from '../../main/api/api';
import { Footer } from '../../footer/footer';

import '../../layout.less';

/**
 * 应用布局
 */
@shortcut()
export default class ApiPage extends BI.Widget {
    static xtype = 'app.cnode_api';

    public props = {
        baseCls: 'app-layout',
    };

    public render() {

        return (
            <BI.VerticalLayout cls='app-layout'>
                <LayoutHeader/>
                <API />
                <Footer />
            </BI.VerticalLayout>
        );
    }
}
