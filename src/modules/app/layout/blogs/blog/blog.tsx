import { shortcut } from '@core/decorator';
import './blog.less';


export interface BlogProps {
    blogId: string;
    blogType: "ask" | "share" | "job" | "dev" | "good";
    blogVisit: number;
    blogReply: number;
    blogTitle: string;
    blogDate: string;
    userId: string;
    userName: string;
    replyImgHref: string;
    avatarImgHref: string;
    topBlog: boolean;
    good: boolean;
    blogTag: string;
}

@shortcut()
export class Blog extends BI.Widget {
    static xtype = 'app.layout_blog';

    public props: BlogProps & Widget['props'];

    public render() {
        const {
            blogVisit,
            blogReply,
            blogTitle,
            blogDate,
            avatarImgHref,
            blogTag } = this.options;
        return (
                <BI.LeftRightVerticalAdaptLayout
                    cls='app-layout-blog'
                    hgap={10}
                    items={{
                        left: [
                            <BI.A
                            el={{
                                type: "bi.default",
                                items: [{
                                    type: "bi.img",
                                    width: 30,
                                    height: 30,
                                    hgap: 10,
                                    src: avatarImgHref
                                }]
                            }}
                            href={avatarImgHref}
                            />,
                            <BI.CenterAdaptLayout height={30} width={55}>
                                <BI.Label text={blogReply+''} textAlign='center' cls='reply'/>
                                <BI.Label text='/' textAlign='center' cls='split'/>
                                <BI.Label text={blogVisit+''} textAlign='center' cls='visit'/>
                            </BI.CenterAdaptLayout>,
                            <BI.VerticalAdaptLayout height={30} width={35}  hgap={5}>
                                <BI.Label text={blogTag} textAlign='center'
                                cls={blogTag === '置顶' || blogTag === '精华' ? 'green-tag' : 'normal-tag'}
                                />
                            </BI.VerticalAdaptLayout>,
                            <BI.A
                            lgap={5}
                            height={30}
                            el={{
                                type: "bi.default",
                                items: [{
                                    type: "bi.label",
                                    textAlign: "left",
                                    cls: "title",
                                    text: blogTitle
                                }]
                            }}
                            href="###"
                            />
                        ],
                        right: [
                            <BI.LeftRightVerticalAdaptLayout
                            width={90}
                            items={{
                                left: [
                                    <BI.A
                                    el={{
                                        type: "bi.left",
                                        items: [{
                                            type: "bi.img",
                                            width: 18,
                                            height: 18,
                                            src: "https://avatars.githubusercontent.com/u/91187026?v=4&s=120"
                                        }]
                                    }}
                                    href="###"
                                    />
                                ],
                                right: [
                                    <BI.A
                                    width={55}
                                    height={30}
                                    rgap={5}
                                    el={{
                                        type: "bi.right",
                                        items: [{
                                            type: "bi.label",
                                            textAlign: "right",
                                            cls: "date",
                                            text: blogDate
                                        }]
                                    }}
                                    href="###"
                                    />
                                ]
                            }}
                            />,



                        ],
                    }}
                    />

        );
    }
}
