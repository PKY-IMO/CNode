import { shortcut } from '@core/decorator';
import './code.less';

@shortcut()
export class Code extends BI.Widget {
    static xtype = 'app.layout_code';

    public props = {
        baseCls: 'app-layout-code',
    };

    public render() {
        return (
            <BI.DefaultLayout width={290} height={286} hgap={10} vgap={10}  cls='app-layout-community'>
                <BI.DefaultLayout cls='title'  hgap={-10}>
                    <BI.Label cls='title' height={40} hgap={10} text='客户端二维码' textAlign='left'/>
                </BI.DefaultLayout>
                <BI.CenterAdaptLayout bgap={-10}>
                    <BI.Img
                    cls='img'
                    width={200}
                    height={200}
                    src='https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU'
                    />
                </BI.CenterAdaptLayout>
                <BI.A
                    cls='link'
                    width={290}
                    height={26}
                    el={{
                        type: "bi.default",
                        items: [{
                            type: "bi.label",
                            text: "客户端源码地址"
                        }]
                    }}
                    href="####"
                    />
            </BI.DefaultLayout>
        );
    }
}
