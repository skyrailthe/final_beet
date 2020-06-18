import template from './template.html';
import './style.scss';
import { view } from '../../core/view'

export const footer = view({
    id: '#footer-container',
    template,
});