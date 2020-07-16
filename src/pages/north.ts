import { shortcut } from "../../typescript/core/decorator";
import { HtapeXtype, TextButtonXtype } from "../../typescript/core/ui";
import "./north.css";
import { Face } from "./face";

@shortcut()
export class North extends BI.Widget {
    static xtype = "demo.north";

    static EVENT_VALUE_CHANGE = "EVENT_VALUE_CHANGE";

    props = {
        baseCls: "demo-north",
    }
    render() {
        return {
            type: HtapeXtype,
            items: [{
                width: 230,
                el: {
                    type: TextButtonXtype,
                    listeners: [{
                        eventName: BI.Button.EVENT_CHANGE,
                        action: () => {
                            this.fireEvent(North.EVENT_VALUE_CHANGE, Face.xtype);
                        },
                    }],
                    cls: "logo",
                    height: 50,
                    text: "FineUI物料库",
                },
            }],
        };
    }
}
