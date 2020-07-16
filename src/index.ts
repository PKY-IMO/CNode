import { Index } from "./pages";

class Router extends BI.Router {
    index() {
        BI.createWidget({
            type: Index.xtype,
            ref: (_ref: any) => {
                console.log(_ref);
            },
            element: "#wrapper",
        });
    }
}

// @ts-ignore
new Router({ routes: { "": "index" } });

BI.history.start();
