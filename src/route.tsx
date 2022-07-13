import ApiPage from "./modules/app/layout/page/api/api";
import Index from "./modules/app/layout/page/index";
import StartPage from "./modules/app/layout/page/getstart/getstart";

export var routes:any = [{
        path: "/",
        name: "app.layout",
        component: {
            type: Index.xtype,
        }
    },{
        path: "/start",
        name: "app.layout",
        component: {
            type: StartPage.xtype,
        }
    },{
        path: "/api",
        name: "app.layout",
        component: {
            type: ApiPage.xtype,
        }
    }
];
