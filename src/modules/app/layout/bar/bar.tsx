import { shortcut } from '@core/decorator';
import './bar.less';

interface BarProps {
    theme: string;
}

@shortcut()
export class Bar extends BI.Widget {
    static xtype = 'app.layout_bar';

    public props: BarProps;

    public render() {
        const { theme } = this.options;
        return (
            <BI.HorizontalLayout  height={40} cls='app.layout_bar nav'>
                <BI.A
                cls='home'
                lgap={5}
                el={{
                    type: "bi.label",
                    textAlign: "left",
                    tgap: 10,
                    text: "主页",
                    href: "#####"
                    }}/>
                <BI.Label tgap={5} cls='split'  text=' / ' textAlign='left'/>
                <BI.Label tgap={5} cls='theme'  text={theme} textAlign='left'/>
            </BI.HorizontalLayout>
        );
    }
}
