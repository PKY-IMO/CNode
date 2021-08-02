import { model, Model } from '@core/decorator';

@model()
export default class LayoutModel extends Model<{
    types: {
        openedCards: string[]; // 打开卡片的key的集合
        activeCard: string; // 当前卡片的key
    };
}> {
    static xtype = 'app.model.layout';

    public childContext = <const>['openedCards', 'activeCard'];

    public state() {
        return {
            openedCards: [],
            activeCard: '',
        };
    }
}
