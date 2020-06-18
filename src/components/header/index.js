import template from './template.html';
import './style.scss';
import { view } from '../../core/view'

export const header = view({
    id: '#header-container',
    template,
});
