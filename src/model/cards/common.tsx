import { model, Model } from '@/core/decorator';

@model()
export default class CardCommonModel extends Model {
    static xtype = 'app.model.card_common';

    public context = ['openedCards', 'activeCard'];
}
