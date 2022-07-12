import { shortcut } from '@core/decorator';
import './note.less';


export interface APIInfo {
    type: 'topic' | 'collect' | 'comment' | 'user' | 'message' | 'knowledge';
    method: string;
    api: string;
    theme: string;

    intro?: Boolean;
    parameter?: parameterInfo[];
    tip?: string;
    eg?: string;
    ansEg?: string;
    requestEg?: string;
}

interface parameterInfo {
    param: string;
    paramType: string;
    intro?: string;
    detail?: string;
}

interface NoteProps {
    apiType: string;
    title: string;
    apis?: APIInfo[];
}

@shortcut()
export class Note extends BI.Widget {
    static xtype = 'app.layout_note';

    public props: NoteProps;

    public render() {
        const { title, apiType, apis} = this.options;
        const apiWithSameType = apis?.filter((api) => api.type === apiType);
        return (
            <BI.VerticalLayout cls='app-layout-note'>
                <BI.HorizontalLayout height={40} tgap={30} cls='underline'>
                    <BI.Label tgap={-30} cls='title'  text={title} textAlign='left'/>
                </BI.HorizontalLayout>
                <BI.VerticalLayout
                    cls='app-layout-note'
                    items={
                        BI.map(BI.range(0, apiWithSameType?.length || 0, 1), (i:number) => {
                            var note = apiWithSameType?.[i];
                            // var name: string = "《"+carBooks[i].name+"》";
                            return (
                                <BI.DefaultLayout tgap={15} >
                                    <BI.HorizontalLayout tgap={15} rgap={5} cls='sub-title underline'>
                                        <BI.Label tgap={-15} height={21} text={note?.method} textAlign='left'/>
                                        <BI.Label tgap={-15} height={21} text={note?.api} textAlign='left'/>
                                        <BI.Label tgap={-15} height={21} text={note?.theme} textAlign='left'/>
                                    </BI.HorizontalLayout>
                                    {note?.requestEg ? (
                                        <BI.DefaultLayout>
                                            <BI.HorizontalLayout>
                                                <BI.Label height={25} text='请求示例：' textAlign='left'/>
                                                <BI.A
                                                textAlign='left'
                                                cls='link api-link'
                                                height={25}
                                                el={{
                                                    type: "bi.label",
                                                    textAlign: 'left',
                                                    text: note?.requestEg,
                                                    href: note?.requestEg}}/>
                                            </BI.HorizontalLayout>
                                        </BI.DefaultLayout>
                                    ) : null}
                                    {note?.intro ? (
                                        <BI.HorizontalLayout rgap={5}>
                                            <BI.Label height={25} text='接受' textAlign='left'/>
                                            <BI.Label height={25} text={note?.method} textAlign='left'/>
                                            <BI.Label height={25} text='参数' textAlign='left'/>
                                        </BI.HorizontalLayout>
                                    ) : null}
                                    {note?.parameter ? (
                                        <BI.DefaultLayout
                                        cls='param'
                                        items={
                                            BI.map(BI.range(0, note?.parameter?.length, 1), (i:number) => {
                                                var paramInfo = note?.parameter?.[i];
                                                return (
                                                    <BI.HorizontalLayout >
                                                        <BI.VerticalAdaptLayout height={30} rgap={10}>
                                                            <BI.Label tgap={1} lgap={5} height={25} text='·' textAlign='left' cls='dot'/>
                                                            <BI.Label height={25} text={paramInfo?.param} textAlign='left'/>
                                                            <BI.Label height={18} text={paramInfo?.paramType} textAlign='left' cls='type'/>
                                                            {/* <BI.Label height={25} text={paramInfo?.intro} textAlign='left'/> */}
                                                            <BI.Label height={25} text={paramInfo?.intro || '' + paramInfo?.detail|| ''} width={650} textAlign='left' cls='detail' />
                                                        </BI.VerticalAdaptLayout>
                                                    </BI.HorizontalLayout>
                                                )
                                            })
                                        }
                                        />
                                    ): null}
                                    {note?.eg ? (
                                        <BI.DefaultLayout>
                                            <BI.HorizontalLayout>
                                                <BI.Label height={25} text='示例：' textAlign='left'/>
                                                <BI.A
                                                textAlign='left'
                                                cls='link api-link'
                                                height={25}
                                                el={{
                                                    type: "bi.label",
                                                    textAlign: 'left',
                                                    text: note?.eg,
                                                    href: note?.eg}}/>
                                            </BI.HorizontalLayout>
                                        </BI.DefaultLayout>
                                    ) : null}
                                    {note?.tip ? (
                                        <BI.DefaultLayout>
                                            <BI.Label bgap={20} height={25} text={note?.tip} textAlign='left'/>
                                        </BI.DefaultLayout>
                                    ) : null}
                                    {note?.ansEg ? (
                                        <BI.DefaultLayout>
                                            {/* <BI.HorizontalLayout> */}
                                                <BI.Label bgap={20} height={25} text='返回值示例' textAlign='left'/>
                                                <BI.Label height={22} text={'    ' + note?.ansEg} textAlign='left' cls='eg'/>
                                            {/* </BI.HorizontalLayout> */}
                                        </BI.DefaultLayout>
                                    ) : null}

                                </BI.DefaultLayout>
                            )
                        })
                    }
                />
            </BI.VerticalLayout>
        );
    }
}
