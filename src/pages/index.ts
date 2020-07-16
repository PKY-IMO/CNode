import { North } from "./north";
import { Center } from "./center";
import { West } from "./west";
import { shortcut } from "../../typescript/core/decorator";

@shortcut()
export class Index extends BI.Widget {
    static xtype = "demo.main";

    props = {
        baseCls: "demo-main bi-background",
    }

    private center: Center;

    render() {
        return {
            type: "bi.border",
            items: {
                north: {
                    height: 50,
                    el: {
                        type: North.xtype,
                        listeners: [{
                            eventName: North.EVENT_VALUE_CHANGE,
                            action: (v: any) => {
                                this.center.setValue(v);
                            },
                        }],
                    },
                },
                west: {
                    width: 230,
                    el: {
                        type: West.xtype,
                        listeners: [{
                            eventName: West.EVENT_VALUE_CHANGE,
                            action: (v: any) => {
                                this.center.setValue(v);
                            },
                        }],
                    },
                },
                center: {
                    el: {
                        type: Center.xtype,
                        ref: (_ref: Center) => {
                            this.center = _ref;
                        },
                    },
                },
            },
        };
    }
}
