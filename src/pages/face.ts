import { shortcut } from "../../typescript/core/decorator";
// import { LabelXtype } from "../../typescript/core/ui";

@shortcut()
export class Face extends BI.Widget {
    static xtype = "demo.face";

    props = {
        baseCls: "demo-face",
    };

    render() {
        return {
            type: "bi.center_adapt",
            items: [{
                type: "bi.button",
                text: "点击",
                handler: () => {
                },
            }],
        };
    }
}
