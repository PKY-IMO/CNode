import { shortcut } from '@core/decorator';
import { Blog } from './blog/blog';

import { BlogProps } from './blog/blog';
import { dealTopicData } from './blog/data';
import './blogs.less';

@shortcut()
export class Blogs extends BI.Widget {
    static xtype = 'app.layout_blogs';

    public props = {
        baseCls: 'app-layout-blogs',
    };

    public createStyle(n:number,active:number):string {
        return n === active ? 'btn-active' : 'btn';
    }
    private data: BlogProps[];

    public async beforeRender() {
        var initData: any;
        await BI.myAxios.get('https://cnodejs.org/api/v1/topics')
            .then(function (response: any) {
                initData = response;
            })
            .catch(function (error: any) {
                console.log(error);
            });
        this.data = dealTopicData(initData.data.data);
        console.log(this.data);
    }

    public render() {
        var group:any;
        var tab:any;
        var active:number=1;
        var data:BlogProps[] = this.data;
        console.log(data);
        return (
            <BI.VerticalLayout cls='app-layout-blogs' width={900} height={2140}>
                <BI.HorizontalAdaptLayout height={40} cls='nav'>
                    <BI.ButtonGroup
                    ref={function(_ref) {
                        group = _ref;
                    }}
                    height={40}
                    hgap={10}
                    value={6}
                    layouts={[{
                        type: "bi.vertical_adapt"
                    }]}
                    items={[{
                        text: "全部",
                        value: 1,
                        cls: this.createStyle(1,active),
                        hgap: 10,
                    }, {
                        text: "精华",
                        value: 2,
                        cls: this.createStyle(2,active),
                        hgap: 10,
                    },{
                        text: "分享",
                        value: 3,
                        cls: this.createStyle(3,active),
                        hgap: 10,
                    },{
                        text: "问答",
                        value: 4,
                        cls: this.createStyle(4,active),
                        hgap: 10,
                    },{
                        text: "招聘",
                        value: 5,
                        cls: this.createStyle(5,active),
                        hgap: 10,
                    },{
                        text: "客户端测试",
                        value: 6,
                        cls: this.createStyle(6,active),
                        hgap: 10,
                    }]}
                    listeners={[{
                        eventName: "EVENT_CHANGE",
                        action: function() {
                            active=group.getValue()[0];
                            tab.setSelect(group.getValue()[0]);
                        }
                    }]}
                    />
                </BI.HorizontalAdaptLayout>

                <BI.Tab
                ref={function(_ref) {
                    tab = _ref;
                }}
                height={2100}
                showIndex={1}
                cardCreator={function(v:any) {
                    switch (v) {
                        case 1:
                            return (
                                <BI.VerticalLayout>
                                    <BI.VerticalLayout
                                    width={900}
                                    items={
                                        BI.map(BI.range(0,data.length,1), (i:number) => {
                                            var item = data[i];
                                            return (
                                                <Blog height={50} {...item}/>
                                            )
                                        })
                                    }/>
                                    <BI.CenterAdaptLayout width={340} height={60} rgap={-10}>
                                        <BI.Pager
                                        cls='pager'
                                        rgap={-10}
                                        layout="bi.center_adapt"
                                        dynamicShow={false}
                                        height={30}
                                        width={320}
                                        pages={10}
                                        groups={5}
                                        curr={1}
                                        prev="«"
                                        next="»"
                                        />
                                    </BI.CenterAdaptLayout>
                                </BI.VerticalLayout>
                            )
                        break;
                        case 2:
                            return {
                                type: "bi.label",
                                cls: "bi-background",
                                text: "面板2"
                            };
                        break;
                        default: return (<Blog></Blog>);
                    }
                    }}
                />
            </BI.VerticalLayout>
        );
    }
}
