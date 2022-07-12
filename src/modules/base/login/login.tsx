import { shortcut } from '@core/decorator';
import './login.less';

@shortcut()
export class Login extends BI.Widget {
    static xtype = 'app.layout_login';

    public props = {
        baseCls: 'app-layout-login',
    };

    public render() {
        return (
            <BI.DefaultLayout width={290} height={116} hgap={10} vgap={10}  cls='app-layout-login'>
                <BI.DefaultLayout tgap={-10} height={36}>
                    <BI.Label vgap={10} text='CNode：Node.js专业中文社区' textAlign='left'></BI.Label>
                </BI.DefaultLayout>

                <BI.HorizontalLayout cls='note'>
                    <BI.Label text='您可以 ' textAlign='left'/>
                    <BI.A
                    cls='link'
                    el={{
                        type: "bi.label",
                        text: "登录",
                        href: "#####"
                        }}/>
                    <BI.Label text=' 或 ' textAlign='left'/>
                    <BI.A
                    cls='link'
                    el={{
                        type: "bi.label",
                        text: "注册",
                        href: "#####"}}/>
                    <BI.Label text=' , 也可以' textAlign='left'/>
                </BI.HorizontalLayout>
                <BI.HorizontalLayout>
                    <BI.A
                        textAlign='left'
                        cls='button'
                        width={151}
                        height={34}
                        el={{
                            type: "bi.label",
                            text: "通过 GitHub 登录",
                            href: "#####"}}/>
                </BI.HorizontalLayout>


            </BI.DefaultLayout>
        );
    }
}
