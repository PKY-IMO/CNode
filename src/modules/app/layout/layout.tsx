import { shortcut } from '@core/decorator';
import { LayoutHeader } from './header/header';
import { Home } from './main/home/home';
import { Footer } from './footer/footer';

import './layout.less';

/**
 * 应用布局
 */
@shortcut()
export default class Layout extends BI.Widget {
    static xtype = 'app.layout';

    public props = {
        baseCls: 'app-layout',
    };

    public render() {

        return (
            <BI.VerticalLayout cls='app-layout'>
                <LayoutHeader/>
                <Home />
                <Footer />
            </BI.VerticalLayout>
        );
    }
}
