import { shortcut } from '@core/decorator';
import { Bar } from '../../bar/bar';
import { Note } from './note/note';
import './api.less';

import { notes } from './note/data';

@shortcut()
export class API extends BI.Widget {
    static xtype = 'app.layout_api';

    public props = {
        baseCls: 'app-layout-api',
    };

    public render() {
        return (
            <BI.HorizontalAdaptLayout cls="app-layout-api"
                tgap={13}
                items={[
                    <BI.LeftRightVerticalAdaptLayout
                    cls="container"
                    items={{
                        left: [
                            <BI.VerticalLayout cls='app-layout-bar'bgap={13} width={900}  >
                                <Bar theme='API'/>
                                <BI.DefaultLayout hgap={10} cls='app-layout-api content'>
                                    <BI.HorizontalLayout  height={25}>
                                        <BI.Label text='以下 api 路径均以' textAlign='left'/>
                                        <BI.A
                                        cls='link'
                                        el={{
                                            type: "bi.label",
                                            textAlign: "left",
                                            text: " https://cnodejs.org/api/v1 ",
                                            href: "https://cnodejs.org/api/v1"}}/>
                                        <BI.Label text='为前缀' textAlign='left'/>
                                    </BI.HorizontalLayout>
                                    <Note title='主题' apiType='topic' apis={notes}/>
                                    <Note title='主题收藏' apiType='collect' apis={notes}/>
                                    <Note title='评论' apiType='comment' apis={notes}/>
                                    <Note title='用户' apiType='user' apis={notes}/>
                                    <Note title='消息通知' apiType='message' apis={notes}/>
                                    <Note title='知识点' apiType='knowledge' apis={notes}/>
                                    <BI.Label tgap={10} bgap={20} height={25} text='1. 如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。建议各移动端应用使用手机扫码的形式登录，' textAlign='left'/>
                                    <BI.Label  bgap={20} height={25} text='   验证使用 /accesstoken 接口，登录后长期保存 accessToken。' textAlign='left'/>
                                </BI.DefaultLayout>
                            </BI.VerticalLayout>
                        ],
                        right: [
                        ],
                    }}
                    />
                ]}
            />
        );
    }
}
