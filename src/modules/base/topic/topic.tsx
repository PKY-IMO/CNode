import { shortcut } from '@core/decorator';
import './topic.less';

@shortcut()
export class Topic extends BI.Widget {
    static xtype = 'app.layout_topic';

    public props = {
        baseCls: 'app-layout-topic',
    };

    public render() {
        return (
            <BI.DefaultLayout width={290} height={220} hgap={10} cls='app-layout-topic'>
                <BI.DefaultLayout cls='title'  hgap={-10} bgap={10}>
                <BI.Label cls='title' height={40} hgap={10} text='无人回复的话题' textAlign='left'/>
                </BI.DefaultLayout>

                <BI.A
                    cls='link'
                    height={32}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "开源免费的nodejs快速开发框架",
                        href: "#####"
                        }}/>
                <BI.A
                    cls='link'
                    height={32}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "开源免费的nodejs快速开发框架",
                        href: "#####"
                        }}/>
                <BI.A
                    cls='link'
                    height={32}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "开源免费的nodejs快速开发框架",
                        href: "#####"
                        }}/>
                <BI.A
                    cls='link'
                    height={32}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "开源免费的nodejs快速开发框架",
                        href: "#####"
                        }}/>
                <BI.A
                    cls='link'
                    height={32}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "开源免费的nodejs快速开发框架",
                        href: "#####"
                        }}/>
            </BI.DefaultLayout>
        );
    }
}
