import { shortcut } from '@core/decorator';
import './menu.less';

@shortcut()
export class Menu extends BI.Widget {
    static xtype = 'app.layout_menu';

    public props = {
        baseCls: 'app-layout-menu',
    };

    public render() {
        // const { HEADER_MENU_TEXT } = LayoutConstant;
        return (
            <BI.VerticalAdaptLayout
            width={330}
            height={40}
            cls="item"
            items={[
                <BI.BasicButton width={60} height={40} render={
                    function() {
                        return {
                            type: "bi.basic_button",
                            el:{
                                type: "bi.label",
                                cls: "item",
                                text: "首页",
                            },
                            listeners: [{
                                eventName: "BasicButton.EVENT_CHANGE",
                                action: function() {
                                    BI.Router.$router.replace('/');
                                }
                            }]
                        };
                    }

                }/>,
                <BI.BasicButton width={85} height={40} render={
                    function() {
                        return {
                            type: "bi.basic_button",
                            el:{
                            type: "bi.label",
                            cls: "item",
                            text: "新手入门"},
                            listeners: [{
                                eventName: "BasicButton.EVENT_CHANGE",
                                action: function() {
                                    BI.Router.$router.replace('/start');
                                }
                            }]
                        };
                    }
                }/>,
                <BI.BasicButton width={55} height={40} render={
                    function() {
                        return {
                            type: "bi.basic_button",
                            el:{
                                type: "bi.label",
                                cls: "item",
                                text: "API"
                            },
                            listeners: [{
                                eventName: "BasicButton.EVENT_CHANGE",
                                action: function() {
                                    BI.Router.$router.replace('/api');
                                }
                            }]
                        };
                    }
                }/>,
                <BI.BasicButton width={60} height={40} render={
                    function() {
                        return {
                            type: "bi.basic_button",
                            el:{
                                type: "bi.label",
                                cls: "item",
                                text: "注册"
                            },
                            listeners: [{
                                eventName: "BasicButton.EVENT_CHANGE",
                                action: function() {
                                    BI.Router.$router.replace('/');
                                }
                            }]
                        };
                    }
                }/>,
                <BI.BasicButton width={60} height={40} render={
                    function() {
                        return {
                            type: "bi.basic_button",
                            el:{
                                type: "bi.label",
                                cls: "item",
                                text: "登录"
                            },
                            listeners: [{
                                eventName: "BasicButton.EVENT_CHANGE",
                                action: function() {
                                    BI.Router.$router.replace('/');
                                }
                            }]
                        };
                    }
                }/>
            ]}
            />
        );
    }

}
