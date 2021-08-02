import { model, Model } from '@core/decorator';

@model()
export default class DemoModel extends Model<{
    types: {
        openedCards: string[];
        ativeCard: string;
    };
    context: DemoModel['context'];
}> {
    static xtype = 'app.model.demo';

    public context = <const>['openedCards', 'activeCard'];
}
