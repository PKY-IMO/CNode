import { shortcut } from '@core/decorator';
import './footer.less';

@shortcut()
export class Footer extends BI.Widget {
    static xtype = 'app.layout_footer';

    public props = {
        baseCls: 'app-layout-footer',
    };

    public render() {
        return (
            <BI.HorizontalAdaptLayout height={195} cls='app-layout-footer'
                items={[
                    <BI.LeftRightVerticalAdaptLayout
                    cls="container"
                    items={{
                        left: [
                            <BI.VerticalLayout cls="container">
                                <BI.DefaultLayout tgap={20} >
                                    <BI.HorizontalLayout height={26}>
                                        <BI.A
                                        cls='link'
                                        el={{
                                            type: "bi.label",
                                            textAlign: "left",
                                            text: "RSS",
                                            href: "#####"
                                            }}/>
                                        <BI.Label cls='split'  text=' | ' textAlign='left'/>
                                        <BI.A
                                        cls='link'
                                        el={{
                                            type: "bi.label",
                                            textAlign: "left",
                                            text: "源码地址",
                                            href: "#####"}}/>
                                    </BI.HorizontalLayout>
                                </BI.DefaultLayout>

                                <BI.DefaultLayout height={20} bgap={10}>
                                    <BI.Label
                                        cls='tip'
                                        textAlign='left'
                                        text='CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。'
                                    />
                                </BI.DefaultLayout>
                                <BI.HorizontalLayout height={60} bgap={10}>
                                    <BI.DefaultLayout>
                                        <BI.Label  text='服务器搭建在 ' tgap={20}/>
                                    </BI.DefaultLayout>
                                    <BI.A
                                    width={92}
                                    height={60}
                                    el={{
                                        type: "bi.default",
                                        items: [{
                                            type: "bi.img",
                                            src: "https://static2.cnodejs.org/public/images/digitalocean.png"
                                        }]
                                    }}
                                    href="###"
                                    />
                                    <BI.DefaultLayout>
                                        <BI.Label  text=' ，存储赞助商为 ' tgap={20}/>
                                    </BI.DefaultLayout>
                                    <BI.A
                                    width={115}
                                    height={60}
                                    el={{
                                        type: "bi.default",
                                        items: [{
                                            type: "bi.img",
                                            src: "https://static2.cnodejs.org/public/images/qiniu.png"
                                        }]
                                    }}
                                    href="###"
                                    />
                                </BI.HorizontalLayout>
                                <BI.DefaultLayout>
                                    <BI.HorizontalLayout height={20}>
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
                        ],
                    }}
                    />
                ]}
            />
            // <BI.VerticalLayout height={195} tgap={20}  cls='app-layout-footer'>
            //     <BI.HorizontalLayout height={26} cls='container'>
            //         <BI.A
            //         cls='link'
            //         el={{
            //             type: "bi.label",
            //             textAlign: "left",
            //             text: "RSS",
            //             href: "#####"
            //             }}/>
            //         <BI.Label  text='|' textAlign='left'/>
            //         <BI.A
            //         cls='link'
            //         el={{
            //             type: "bi.label",
            //             textAlign: "left",
            //             text: "源码地址",
            //             href: "#####"}}/>
            //     </BI.HorizontalLayout>


            // </BI.VerticalLayout>
        );
    }
}
