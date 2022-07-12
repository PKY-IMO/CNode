import { shortcut } from '@core/decorator';
import { Login } from '../../../../base/login/login';
import { Topic } from '../../../../base/topic/topic';
import { Rank } from '../../../../base/rank/rank';
import { Community } from '../../../../base/community/community';
import { Code } from '../../../../base/code/code';
import { Blogs } from '../../blogs/blogs';
import './home.less';

@shortcut()
export class Home extends BI.Widget {
    static xtype = 'app.layout_home';

    public props = {
        baseCls: 'app-layout-home',
    };

    public render() {
        return (
            <BI.HorizontalAdaptLayout cls="app-layout-home"
                tgap={13}
                items={[
                    <BI.LeftRightVerticalAdaptLayout
                    cls="container"
                    items={{
                        left: [
                            <Blogs bgap={13}/>
                        ],
                        right: [
                            <BI.DefaultLayout bgap={13} height={2140}>
                                <Login/>
                                <Topic/>
                                <Rank/>
                                <Community/>
                                <Code/>
                            </BI.DefaultLayout>

                        ],
                    }}
                    />
                ]}
            />
        );
    }
}
