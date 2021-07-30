import { model, Model } from '@/core/decorator';

@model()
export default class LayoutContentModel extends Model {
    static xtype = 'app.model.layout_content';

    public context = ['openedCards', 'activeCard'];

    public actions = {
        // 切换card
        changeCard: (value: string) => {
            const { model } = this;
            model.activeCard = value;
        },
        // 关闭card
        closeCard: (value: string) => {
            const { model } = this;

            // 获取将关闭card在已打开cards中的下标
            const index = BI.indexOf(model.openedCards, value);
            // 如果关闭card与当前card一致，则自动切换至其它card
            if (value === model.activeCard) {
                const [prevIndex, nextIndex] = [index - 1, index + 1];
                model.activeCard = model.openedCards[nextIndex] || model.openedCards[prevIndex];
            }
            // 然后从已打开cards中删除目标card
            model.openedCards.splice(index, 1);
        },
    };
}
