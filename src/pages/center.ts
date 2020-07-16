import { shortcut } from "../../typescript/core/decorator";
import { TabXtype } from "../../typescript/core/ui";
import { Face } from "./face";

@shortcut()
export class Center extends BI.Widget {
    static xtype = "demo.center";

    tab: any;

    props = {
        baseCls: "demo-center",
    }
    render() {
        return {
            type: TabXtype,
            ref: (_ref: any) => {
                this.tab = _ref;
            },
            single: true,
            showIndex: Face.xtype,
            cardCreator: (v: string) => {
                return {
                    type: v,
                };
            },
        };
    }

    setValue(v: string) {
        this.tab.setSelect(v);
    }
}
