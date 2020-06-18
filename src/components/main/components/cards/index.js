import template from './template.html';
import './style.scss'
import { view } from '../../../../core/view';

export const cards = view({
    id: '#cards-container',
    template,
    events: [
        'click|.btn.btn-primary|onBtnClick'
    ]
});

cards.onBtnClick = () => {
    alert('btn_clicked');
}