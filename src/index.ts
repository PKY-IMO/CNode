import { routes } from './route';
import './index.less';
import axios from "axios";

BI.myAxios = axios;

BI.createWidget({
    type: "bi.router",
    element: '#wrapper',
    routes: routes,
    render: function () {
        return {
            type: "bi.router_view"
        };
    }
});
