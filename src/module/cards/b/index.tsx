import { shortcut, store } from '@/core/decorator';
import CardCommonModel from '@/model/cards/common';

import './index.less';

@shortcut()
@store(CardCommonModel)
export default class CardB extends BI.Widget {
    static xtype = 'app.card_b';

    public props = {
        baseCls: 'app-card-b',
    };

    public watch = {
        openedCards: () => {
            this._updateLabel();
        },
        activeCard: () => {
            this._updateLabel();
        },
    };

    private labelRef: BI.Label;

    private _updateLabel() {
        const { type } = this.options;
        const { openedCards, activeCard } = this.store.model;
        const text = `
        我是 ${type} 组件，
        openedCards 为 [ ${openedCards} ]，
        openedCards 的长度为 ${openedCards.length}，
        activeCard 为 ${activeCard}`;
        this.labelRef.setText(text);
    }

    public mounted() {
        this._updateLabel();
    }

    public render() {
        return (
            <BI.Label
                ref={ref => {
                    this.labelRef = ref;
                }}
            />
        );
    }
}
