import { shortcut } from '@core/decorator';
import './rank.less';

@shortcut()
export class Rank extends BI.Widget {
    static xtype = 'app.layout_rank';

    public props = {
        baseCls: 'app-layout-rank',
    };

    public render() {
        return (
            <BI.DefaultLayout width={290} height={340} hgap={10} cls='app-layout-rank'>
                <BI.HorizontalLayout cls='title'height={40} hgap={-10} bgap={15}>
                    <BI.Label height={40} hgap={10} text='积分榜' textAlign='left'/>
                    <BI.A
                    cls='top'
                    height={40}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "TOP 100 >>",
                        href: "#####"
                        }}/>
                </BI.HorizontalLayout>
                <BI.HorizontalLayout>
                    <BI.Label cls='ranking' height={27} rgap={10} text='23240' textAlign='left'/>
                    <BI.A
                    cls='users'
                    height={27}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "i5ting",
                        href: "#####"
                        }}/>
                </BI.HorizontalLayout>
                <BI.HorizontalLayout>
                    <BI.Label cls='ranking' height={27} rgap={10} text='23240' textAlign='left'/>
                    <BI.A
                    cls='users'
                    height={27}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "i5ting",
                        href: "#####"
                        }}/>
                </BI.HorizontalLayout>
                <BI.HorizontalLayout>
                    <BI.Label cls='ranking' height={27} rgap={10} text='23240' textAlign='left'/>
                    <BI.A
                    cls='users'
                    height={27}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "i5ting",
                        href: "#####"
                        }}/>
                </BI.HorizontalLayout>
                <BI.HorizontalLayout>
                    <BI.Label cls='ranking' height={27} rgap={10} text='23240' textAlign='left'/>
                    <BI.A
                    cls='users'
                    height={27}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "i5ting",
                        href: "#####"
                        }}/>
                </BI.HorizontalLayout>
                <BI.HorizontalLayout>
                    <BI.Label cls='ranking' height={27} rgap={10} text='23240' textAlign='left'/>
                    <BI.A
                    cls='users'
                    height={27}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "i5ting",
                        href: "#####"
                        }}/>
                </BI.HorizontalLayout>
                <BI.HorizontalLayout>
                    <BI.Label cls='ranking' height={27} rgap={10} text='23240' textAlign='left'/>
                    <BI.A
                    cls='users'
                    height={27}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "i5ting",
                        href: "#####"
                        }}/>
                </BI.HorizontalLayout>
                <BI.HorizontalLayout>
                    <BI.Label cls='ranking' height={27} rgap={10} text='23240' textAlign='left'/>
                    <BI.A
                    cls='users'
                    height={27}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "i5ting",
                        href: "#####"
                        }}/>
                </BI.HorizontalLayout>
                <BI.HorizontalLayout>
                    <BI.Label cls='ranking' height={27} rgap={10} text='23240' textAlign='left'/>
                    <BI.A
                    cls='users'
                    height={27}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "i5ting",
                        href: "#####"
                        }}/>
                </BI.HorizontalLayout>
                <BI.HorizontalLayout>
                    <BI.Label cls='ranking' height={27} rgap={10} text='23240' textAlign='left'/>
                    <BI.A
                    cls='users'
                    height={27}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "i5ting",
                        href: "#####"
                        }}/>
                </BI.HorizontalLayout>
                <BI.HorizontalLayout>
                    <BI.Label cls='ranking' height={27} rgap={10} text='23240' textAlign='left'/>
                    <BI.A
                    cls='users'
                    height={27}
                    el={{
                        type: "bi.label",
                        textAlign: "left",
                        text: "i5ting",
                        href: "#####"
                        }}/>
                </BI.HorizontalLayout>
            </BI.DefaultLayout>
        );
    }
}
