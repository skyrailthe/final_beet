import template from './template.html';
import './style.scss';
import { cards } from './components/cards';
import { hello } from './components/hello';
import { view } from '../../core/view';


export const main = view({
    id: '#main-container',
    template,
    components: [cards, hello]
});