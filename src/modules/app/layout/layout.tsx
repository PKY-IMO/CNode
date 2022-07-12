import { shortcut, store } from '@core/decorator';
import { LayoutHeader } from './header/header';
import { Home } from './main/home/home';
import { Start } from './main/start/start';
import { API } from './main/api/api';
import { Main } from './main/main';
import { Footer } from './footer/footer';
import LayoutModel from './layout.model';

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
