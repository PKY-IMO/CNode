import { model, Model } from '@/core/decorator';

@model()
export default class LayoutSiderModel extends Model {
    static xtype = 'app.model.layout_sider';

    public context = ['openedCards', 'activeCard'];

    public actions = {
        // 用于type为single时打开单个card
        openSingleCard: (value: string) => {
            const { model } = this;
            if (!model.openedCards.includes(value)) {
                model.openedCards.push(value);
            }
            model.activeCard = value;
        },
        // 用于type为multiple时批量打开cards
        openMultipleCards: (values: string[]) => {
            const { model } = this;
            model.openedCards = [...values];
            model.activeCard = values[0];
        },
        // 用于切换一级菜单时关闭所有cards
        closeAllCards: () => {
            const { model } = this;
            model.openedCards = [];
        },
    };
}
