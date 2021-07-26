import { model, Model } from '@/core/decorator';

@model()
export default class LayoutHeaderModel extends Model {
    static xtype = 'app.model.layout_header';

    public context = ['openedCards', 'activeCard'];
}
