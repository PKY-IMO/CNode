import { shortcut } from '@core/decorator';
import { Login } from '../../../../base/login/login';
import { Topic } from '../../../../base/topic/topic';
import { Rank } from '../../../../base/rank/rank';
import { Community } from '../../../../base/community/community';
import { Code } from '../../../../base/code/code';
import { Blogs } from '../../blogs/blogs';
import { Bar } from '../../bar/bar';
import { Card } from './card/card';
import './start.less';

import { books } from './card/data';

@shortcut()
export class Start extends BI.Widget {
    static xtype = 'app.layout_start';

    public props = {
        baseCls: 'app-layout-start',
    };

    public render() {
        return (
            <BI.HorizontalAdaptLayout cls="app-layout-start"
                tgap={13}
                items={[
                    <BI.LeftRightVerticalAdaptLayout
                    cls="container"
                    items={{
                        left: [
                            <BI.VerticalLayout cls='app-layout-bar'bgap={13} width={900}  height={1260}>
                                <Bar theme='Node.js 新手入门'/>
                                <BI.DefaultLayout hgap={10} >
                                    <Card BarType='intro' title='入门' books={books}/>
                                    <Card tgap={30} BarType='resource' title='资源' books={books}/>
                                    <Card tgap={30} BarType='celebrity' title='名人' books={books}/>
                                    <Card tgap={30} bgap={15} BarType='server' title='服务器' books={books}/>
                                    <BI.HorizontalLayout  height={25}>
                                        <BI.Label text='新手搭建 Node.js 服务器，推荐使用无需备案的 ' textAlign='left'/>
                                        <BI.A
                                        cls='site'
                                        el={{
                                            type: "bi.label",
                                            textAlign: "left",
                                            text: "DigitalOcean(https://www.digitalocean.com/)",
                                            href: "https://www.digitalocean.com/"}}/>
                                    </BI.HorizontalLayout>
                                </BI.DefaultLayout>
                            </BI.VerticalLayout>
                        ],
                        right: [
                            <BI.DefaultLayout bgap={13} height={1260}>
                                <Login/>
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
