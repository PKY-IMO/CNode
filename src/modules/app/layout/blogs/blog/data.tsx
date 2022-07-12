import { BlogProps } from "./blog";

//"ask" | "share" | "job" | "dev" | "good";
function changeType (pre: string, good: boolean, top: boolean): string {
    if (top) return '置顶';
    if (good) return '精华';
    switch(pre) {
    case 'ask':
        return '问答';
        break;
    case 'share':
        return '分享';
        break;
    case 'job':
        return '招聘';
        break;
    case 'dev':
        return '测试';
        break;
    default:
        return '精华';
    }
}

function getDateDiff(startTime:string, endTime:string = new Date()+'') {
    //将日期字符串转换为时间戳
    var sTime = new Date(startTime).getTime(); //开始时间
    var eTime = new Date(endTime).getTime();  //结束时间
    //作为除数的数字
    var divNumDay = 1000 * 3600 * 24;

    const day = parseInt((eTime - sTime) / parseInt(divNumDay+'')+'');
    return day + 1 < 30 ? day + ' 天前' : Math.floor(day/30) + ' 个月前';
}

export function dealTopicData (initData: any[]): BlogProps[]  {
    var res:BlogProps[] = [];
    initData.forEach((item: any)=> {
        res.push({
            blogId: item.id,
            blogType: item.tab,
            blogVisit: item.visit_count,
            blogReply: item.reply_count,
            blogTitle: item.title,
            blogDate: getDateDiff(item.last_reply_at),
            userId: item.author_id,
            userName: item.loginname,
            replyImgHref: '	https://avatars.githubusercontent.com/u/91187026?v=4&s=120',
            avatarImgHref: item.author.avatar_url,
            topBlog: item.top,
            good: item.good,
            blogTag: changeType(item.tab, item.good, item.top)
        });
    });
    return res;
}
