import { shortcut } from '@core/decorator';
import './community.less';

@shortcut()
export class Community extends BI.Widget {
    static xtype = 'app.layout_community';

    public props = {
        baseCls: 'app-layout-community',
    };

    public render() {
        return (
            <BI.DefaultLayout width={290} height={220} hgap={10} vgap={10}  cls='app-layout-community'>
                <BI.DefaultLayout cls='title'  hgap={-10}>
                    <BI.Label cls='title' height={40} hgap={10} text='友情社区' textAlign='left'/>
                </BI.DefaultLayout>
                <BI.A
                width={150}
                tgap={-10}
                height={50}
                cls='img'
                el={{
                    type: "bi.default",
                    items: [{
                        type: "bi.img",
                        src: "https://static2.cnodejs.org/public/images/ruby-china-20150529.png"
                    }]
                }}
                href="###"
                />
                <BI.A
                width={150}
                tgap={-10}
                height={34}
                cls='img'
                el={{
                    type: "bi.default",
                    items: [{
                        type: "bi.img",
                        src: "https://static2.cnodejs.org/public/images/golangtc-logo.png"
                    }]
                }}
                href="###"
                />
                <BI.A
                width={150}
                tgap={-10}
                height={50}
                cls='img'
                el={{
                    type: "bi.default",
                    items: [{
                        type: "bi.img",
                        src: "https://static2.cnodejs.org/public/images/phphub-logo.png"
                    }]
                }}
                href="###"
                />
            </BI.DefaultLayout>
        );
    }
}
