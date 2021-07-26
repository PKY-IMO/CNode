import { model, Model } from '@/core/decorator';

@model()
export default class LayoutModel extends Model {
    static xtype = 'app.model.layout';

    // openedCards: 已经打开的卡片keys
    // activeCard: 正在浏览的卡片key
    public childContext = ['openedCards', 'activeCard'];

    public state() {
        return {
            openedCards: [],
            activeCard: '',
        };
    }
}
