import { APIInfo } from "./note";

export var notes: APIInfo[] = [
    {type: 'topic',
    method: 'get',
    api: '/topics',
    theme: '主题首页',
    intro: true,
    parameter: [
        {param: 'page',
        paramType: 'Number',
        intro: '页数'},
        {param: 'tab',
        paramType: 'String',
        intro: '主题分类。',
        detail: '目前有 ask share job good'},
        {param: 'limit',
        paramType: 'Number',
        intro: '每一页的主题数量'},
        {param: 'mdrender',
        paramType: 'String',
        detail: '当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。'},
    ],
    eg: '/api/v1/topics',
    },
    {type: 'topic',
    method: 'get',
    api: '/topic/:id',
    theme: '主题详情',
    intro: true,
    parameter: [
        {param: 'mdrender',
        paramType: 'String',
        detail: '当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。'},
        {param: 'accesstoken',
        paramType: 'String',
        detail: '当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。'}
    ],
    eg: '/api/v1/topic/5433d5e4e737cbe96dcef312',
    },
    {type: 'topic',
    method: 'post',
    api: '/topics',
    theme: '新建主题',
    intro: true,
    parameter: [
        {param: 'accesstoken',
        paramType: 'String',
        intro: '用户的 accessToken'},
        {param: 'title',
        paramType: 'String',
        intro: '标题'},
        {param: 'tab',
        paramType: 'String',
        detail: '目前有 ask share job dev。开发新客户端的同学，请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。'},
        {param: 'content',
        paramType: 'String',
        intro: '主题内容'},
    ],
    ansEg: "{success: true, topic_id: '5433d5e4e737cbe96dcef312'}",
    },
    {type: 'topic',
    method: 'post',
    api: '/topics/update',
    theme: '编辑主题',
    intro: true,
    parameter: [
        {param: 'accesstoken',
        paramType: 'String',
        intro: '用户的 accessToken'},
        {param: 'topic_id',
        paramType: 'String',
        intro: '主题id'},
        {param: 'title',
        paramType: 'String',
        intro: '标题'},
        {param: 'content',
        paramType: 'String',
        detail: '主体内容',
        },
    ],
    ansEg: "{success: true, topic_id: '5433d5e4e737cbe96dcef312'}",
    },
    {type: 'collect',
    method: 'post',
    api: '/topic_collect/collect',
    theme: '收藏主题',
    intro: true,
    parameter: [
        {param: 'accesstoken',
        paramType: 'String',
        intro: '用户的 accessToken'},
        {param: 'topic_id',
        paramType: 'String',
        intro: '主题id'}
    ],
    ansEg: '{"success": true}',
    },
    {type: 'collect',
    method: 'post',
    api: '/topic_collect/de_collect',
    theme: '取消主题',
    intro: true,
    parameter: [
        {param: 'accesstoken',
        paramType: 'String',
        intro: '用户的 accessToken'},
        {param: 'topic_id',
        paramType: 'String',
        intro: '主题id'}
    ],
    ansEg: "{success: true}",
    },
    {type: 'collect',
    method: 'get',
    api: '/topic_collect/:loginname',
    theme: '用户所收藏的主题',
    intro: false,
    eg: '/api/v1/topic_collect/alsotang',
    },
    {type: 'comment',
    method: 'post',
    api: '/topic/:topic_id/replies',
    theme: '新建评论',
    intro: true,
    parameter: [
        {param: 'accesstoken',
        paramType: 'String',
        intro: '用户的 accessToken'},
        {param: 'content',
        paramType: 'String',
        detail: '评论的主体'},
        {param: 'reply_id',
        paramType: 'String',
        detail: '如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。'}
    ],
    ansEg: "{success: true, reply_id: '5433d5e4e737cbe96dcef312'}",
    },
    {type: 'comment',
    method: 'post',
    api: '/reply/:reply_id/ups',
    theme: '为评论点赞',
    intro: true,
    parameter: [
        {param: 'accesstoken',
        paramType: 'String',
        intro: '用户的 accessToken'},
    ],
    tip: '接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 action 字段中，up or down。',
    ansEg: '{"success": true, "action": "down"}',
    },
    {type: 'user',
    method: 'get',
    api: '/user/:loginname',
    theme: '用户详情',
    intro: false,
    eg: '/api/v1/user/alsotang',
    },
    {type: 'comment',
    method: 'post',
    api: '/accesstoken',
    theme: '验证 accessToken 的正确性',
    intro: true,
    parameter: [
        {param: 'accesstoken',
        paramType: 'String',
        intro: '用户的 accessToken'},
    ],
    tip: '如果成功匹配上用户，返回成功信息。否则 403。',
    ansEg: '{success: true, loginname: req.user.loginname, id: req.user.id, avatar_url: req.user.avatar_url}',
    },
    {type: 'message',
    method: 'get',
    api: '/message/count',
    theme: '获取未读消息数',
    intro: true,
    parameter: [
        {param: 'accesstoken',
        paramType: 'String'},
    ],
    ansEg: '{ data: 3 }',
    },
    {type: 'message',
    method: 'get',
    api: '/messages',
    theme: '获取已读和未读消息',
    intro: true,
    parameter: [
        {param: 'accesstoken',
        paramType: 'String'},
        {param: 'mdrender',
        paramType: 'String',
        detail: '当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。'},
    ],
    ansEg: '##',
    },
    {type: 'message',
    method: 'post',
    api: '/message/mark_one/:msg_id',
    theme: '标记单个消息为已读',
    requestEg: '/message/mark_one/58ec7d39da8344a81eee0c14',
    intro: true,
    parameter: [
        {param: 'accesstoken',
        paramType: 'String'}
    ],
    ansEg: '{success: true,marked_msg_id: "58ec7d39da8344a81eee0c14"}',
    },
];
