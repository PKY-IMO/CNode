// import { shortcut } from '@core/decorator';
// import { Home } from './home/home';
// import { API } from './api/api';
// import { Start } from './start/start';
// import { Router } from '@fui/core';
// import './main.less';

// var routes = [{
//     path: "/",
//     name: "home",
//     component: {
//         type: "home",
//     }
// }, {
//     path: "/:id",
//     component: {
//         type: "main",
//     },
//     children: [{
//         path: "",
//         // 参数变了
//         components: {
//             "api": {
//                 type: "api"
//             },
//             "start": {
//                 type: "start"
//             }
//         },
//     }]
// }];


// @shortcut()
// export class Main extends BI.Widget {
//     static xtype = 'app.layout_main';
//     public props = {
//         baseCls: 'app-layout-main',
//     };

//     public render() {
//         // var id = BI.Router.$router.history.current.params.id;
//         return {
//                 type: "bi.vtape",
//                 items: [{
//                     type: "bi.router_view",
//                     name: 'home',
//                 },{
//                     type: "bi.router_view",
//                     // 命名视图
//                     name: "start",
//                     deps: 1,
//                 },{
//                     type: "bi.router_view",
//                     // 命名视图
//                     name: "api",
//                     deps: 1,
//                 }],
//             };
//     }
// }
