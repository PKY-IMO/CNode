import { shortcut } from '@core/decorator';
import './card.less';

export interface BookInfo {
    type: 'intro' | 'resource' | 'celebrity' | 'server';
    name: string;
    href: string;
}

interface BarProps {
    BarType: string;
    title: string;
    books: BookInfo[];
}

@shortcut()
export class Card extends BI.Widget {
    static xtype = 'app.layout_card';

    public props: BarProps;

    public render() {
        const { BarType, title, books } = this.options;
        const carBooks = books.filter((book)=>book.type === BarType);
        const total = carBooks.length;
        return (
            <BI.VerticalLayout  cls='app-layout-card'>
                <BI.HorizontalLayout height={40} cls='underline'>
                    <BI.Label cls='header'  text='Node.js ' textAlign='left'/>
                    <BI.Label cls='header'  text={title} textAlign='left'/>
                </BI.HorizontalLayout>
                <BI.VerticalLayout
                    cls='app-layout-card'
                    items={
                        BI.map(BI.range(0, total, 1), (i:number) => {
                            var name: string = "《"+carBooks[i].name+"》";
                            var href: string = carBooks[i].href+'';
                            // console.log(href);
                            return (
                                <BI.DefaultLayout tgap={15}>
                                    <BI.Label height={25} text={name} textAlign='left'/>
                                    <BI.A
                                        textAlign='left'
                                        cls='link'
                                        width='fill'
                                        height={25}
                                        el={{
                                            type: "bi.label",
                                            textAlign: 'left',
                                            text: href,
                                            href: href}}/>
                                </BI.DefaultLayout>
                            )
                        })
                    }
                />
            </BI.VerticalLayout>

        );
    }
}
