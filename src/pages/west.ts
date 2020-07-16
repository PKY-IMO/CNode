import { MultilayerSingleLevelTreeXtype } from "../../typescript/core/ui";
import { shortcut } from "../../typescript/core/decorator";

@shortcut()
export class West extends BI.Widget {
    static EVENT_VALUE_CHANGE = "EVENT_VALUE_CHANGE";

    static xtype = "demo.west";

    tree: any;

    props = {
        baseCls: "demo-west bi-border-right bi-card",
    }

    render() {
        return {
            type: MultilayerSingleLevelTreeXtype,
            listeners: [{
                eventName: BI.MultiLayerSingleLevelTree.EVENT_CHANGE,
                action: (v: any) => {
                    this.fireEvent(West.EVENT_VALUE_CHANGE, v);
                },
            }],
            items: [],
            ref: (_ref: any) => {
                this.tree = _ref;
            },
        };
    }
}
