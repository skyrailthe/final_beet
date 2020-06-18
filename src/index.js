import 'bootstrap';
import './style.scss';
import { header } from './components/header';
import { main } from './components/main';
import { footer } from './components/footer';


window.onload = () => {
  header.render();
  main.render();
  footer.render();
}