import ToDoList from '@/module/cards/todolist';
import CardDefault from '@/module/cards/default';
import CardA from '@/module/cards/a';
import CardB from '@/module/cards/b';
import CardC from '@/module/cards/c';
import CardD from '@/module/cards/d';

export default {
    // 页面LOGO链接
    APP_LOGO_SRC:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABAxJREFUWAntl1mIjWEYxx3bDBnLWBIhMePOUpYU90oppSwpuVCyXs0oF8qFKORCJCTlxl6uKMpSjC37OvZ1LDPWIcJ8fv/xvue851vPmTnMXHjq3/O8z/b+v/N973LatGnlkioEP8/z2tJnGhgBnoI9qVTqA7rlBXIl4Axw5QWD4S3PDgYQ2eAyc+xLrYXgPYeU3+zbXJL6dporDTENfsXEcgoVguDViJmqWChvI2L/xs37XOx/p2b8GF3+b1hEzAKBJQ65TdiTwDIwG5RElOXtznkfZNJOdJ9qZhiKXmnsTbzKRcYOVdSWElBtO3CI/NehiU116hcB14BfNib1pGAwqHEK32GPSqrLK07DSmcCa37ASHwD5Ow0BXvR24x9JC8CSck03Wwa+1VRDrUnTdFodB9j30mqs/FctxnPFjha28h3ZxxlHjeBg+gqY9+NSs7bzxNXmKeW+mns6+iyXJqRVwz2mLoGdD2QXpBLfWwOTdxvbz3jdqBPbFFEkLpSg0Hoh0CyMCI96Ca5G1gDToPDwH7QmN66YEXGQ7w/0HeqW81uMD4TDVrEBwJLcrWpOYveDoYEKnB2BrdBmKwNFDgOCsqAtg5XfjGY4aQFTOIi+Qj45QuO7KsajuX+LGfcM9DdcZC3z8l1zTcMYhch8WpTsBQ9AKwy42POFI13ukMmEKYmZyX7BhQ8DSsyvuDrMvXEe5ic9IpmnAKfwGc7jX3CGusI0U9CfK4r6saiq9Z7N9Fn1zP+BvpBqK+JDUN3AWk+luB2nFF3tw6mOKBorLP1YyDwx/Ec9TUiJrf21mogQpfpZfdJnU5bQLaQMAvo+LKij1VSC0ZmZzd+Fu3x2/1N+6PN/2FqUN5RoEtGluBT7X4g0QL71mj92We1qu0Pl1Wn/xdFQEdSOegFrgJJHUgf8NiaQGerRORmgg5gJOgKdKRpM5ccA2mS2Ko9ACTaarSaOwHN2y2bUcKIApG8AiQiuRXoyTWpRORCtxP8vYG9AZ3C3gF2gSNA8gAMTKCQHKZJT2BJYqZF5KbHdSCuB7yRrsgYunEPiKu1sfB3baNoLgR1qMOOy5pahXvtIExTW4v/sYlVoucY+xWxZ8aOVe1jo5lgccZMWx2x9IBRq98m2u/vNo6XxhnWz+bnr3kd44BeqStatWOSupEz1ylqMHZFUl3ecRpPAefAeXAfSLQtjU1qRs58oAVzE1SAxE8rqWdsnAl0TF0EkjRJ7GLwdyePZeYEIdIdXACSj+Buo+V5uiSsADplWlYgIZJXQJjYv6UtTvJEGDt8Or600pslhfheoq5URTDLaTOOe4JCENT+Fia6ySRd1cLqCuvjNU4E/j0Sl1f4va6p1CEzAejPVj24BeY1tdf/ukL/Ar8BggVbCy2uHHMAAAAASUVORK5CYII=',
    // 页面标题文字
    APP_TITLE_TEXT: 'FineBI 商业智能',
    // 一级菜单宽度
    MAIN_MENU_WIDTH: 72,
    // 二级菜单宽度
    SUB_MENU_WIDTH: 208,
    // 顶栏高度
    HEADER_HEIGHT: 40,
    // 导航栏高度
    NAV_HEIGHT: 32,
    // 路由映射表
    // 1.顶层路由将作为一级菜单，第二层及更深层将作为二级菜单
    // 2.顶层路由拥有type属性，其说明如下：
    //   2.1 single: 每个二级菜单选项对应一个card，导航标签可关闭，其形式类似BI的目录页面
    //   2.2 multiple: 每个二级菜单选项对应多个card，导航标签不可关闭，其形式类似BI的管理系统页面
    // 3.路由公共配置如下：
    //   3.1 key: 路由的唯一索引
    //   3.2 text: 路由对应的菜单项名称和导航标签名称
    //   3.3 icon: 路由对应的菜单项图标
    //   3.4 children: 路由的子路由
    //   3.5 card|cards:
    //     3.5.1 card: 顶层路由的type为single时可用，表示该路由对应的单个card
    //     3.5.2 cards: 顶层路由的type为multiple时可用，表示该路由对应的多个card
    //       补充 顶层路由的card表示一级菜单对应的默认card
    ROUTES_MAP: [
        {
            type: 'single',
            key: 'catelog',
            text: '模板目录',
            icon: 'copy-font',
            card: CardDefault,
            children: [
                {
                    key: 'todolist',
                    text: 'ToDoList 应用',
                    icon: 'date-font',
                    card: ToDoList,
                },
                {
                    key: 'level-1',
                    text: '一级菜单',
                    icon: 'text-align-center-font',
                    children: [
                        {
                            key: 'level-1-todolist',
                            text: '一级 ToDoList 应用',
                            icon: 'date-font',
                            card: ToDoList,
                        },
                        {
                            key: 'level-2',
                            text: '二级菜单',
                            icon: 'text-align-center-font',
                            children: createTestCards(4, '二级'),
                        },
                        {
                            key: 'level-2-another',
                            text: '另一个二级菜单',
                            icon: 'text-align-center-font',
                            children: createTestCards(4, '另一个二级'),
                        },
                        ...createTestCards(4, '一级'),
                    ],
                },
                ...createTestCards(8),
            ],
        },
        {
            type: 'multiple',
            key: 'management',
            text: '系统管理',
            icon: 'primary-key-font',
            card: CardDefault,
            children: [
                {
                    key: 'series-1',
                    text: '系列一',
                    icon: 'copy-font',
                    cards: createTestCards(4, '系列一的'),
                },
                {
                    key: 'series-2',
                    text: '系列二',
                    icon: 'copy-font',
                    cards: [...createTestCards(4, '系列二的'), ...createTestCards(4, '另一个')],
                },
                {
                    key: 'series-menu',
                    text: '一级菜单',
                    icon: 'text-align-center-font',
                    children: [
                        {
                            key: 'series-menu-1',
                            text: '一级系列一',
                            icon: 'copy-font',
                            cards: createTestCards(8, '一级系列一的'),
                        },
                        {
                            key: 'series-menu-2',
                            text: '一级系列二',
                            icon: 'copy-font',
                            cards: createTestCards(8, '一级系列二的'),
                        },
                        {
                            key: 'series-menu-menu',
                            text: '二级菜单',
                            icon: 'text-align-center-font',
                            children: [
                                {
                                    key: 'series-menu-menu-1',
                                    text: '二级系列一',
                                    icon: 'copy-font',
                                    cards: createTestCards(5, '二级系列一的'),
                                },
                                {
                                    key: 'series-menu-menu-2',
                                    text: '二级系列二',
                                    icon: 'copy-font',
                                    cards: createTestCards(6, '二级系列二的'),
                                },
                                {
                                    key: 'series-menu-menu-3',
                                    text: '二级系列三',
                                    icon: 'copy-font',
                                    cards: createTestCards(7, '二级系列三的'),
                                },
                                {
                                    key: 'series-menu-menu-4',
                                    text: '二级系列四',
                                    icon: 'copy-font',
                                    cards: createTestCards(8, '二级系列四的'),
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};

// ======== 以下为测试用的工具函数 ========

// 生成用于测试的card
function createTestCard(index: number = 0, textPrefix = '') {
    const textList = ['卡片A', '卡片B', '卡片C', '卡片D'];
    const cardList = [CardA, CardB, CardC, CardD];
    const iconList = [
        'search-font',
        'date-font',
        'time-font',
        'date-change-h-font',
        'copy-font',
        'primary-key-font',
        'text-bold-font',
        'text-italic-font',
        'text-underline-font',
        'text-color-font',
        'text-background-font',
    ];

    const name = `${textPrefix}${textList[index % textList.length]}`;

    return {
        key: `${name} (#${index + 1})`,
        text: `${name} (#${index + 1})`,
        icon: iconList[index % iconList.length],
        card: cardList[index % cardList.length],
    };
}

// 生成用于测试的、指定数量的cards
function createTestCards(number: number, textPrefix = '') {
    return BI.map(BI.range(0, number, 1), index => createTestCard(index, textPrefix));
}
