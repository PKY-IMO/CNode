import { Main } from "./modules/app/layout/main/main";
import { API } from "./modules/app/layout/main/api/api";
import { Home } from "./modules/app/layout/main/home/home";
import { Start } from "./modules/app/layout/main/start/start";
import  Layout  from "./modules/app/layout/layout";
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
