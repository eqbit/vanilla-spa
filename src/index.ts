import './style.scss';
import { createElement } from './framework';

const App = createElement({
  value: 'sds',
});

const App2 = createElement({
  value: 'dsdad',
});

document.querySelector('#root').appendChild(App.element);
document.querySelector('#root').appendChild(App2.element);

App.setValue('sdsd');

setTimeout(() => {
  App.setValue('1000');
}, 1000);

setTimeout(() => {
  App2.setValue('2000 2');
}, 2000);

setTimeout(() => {
  App.setValue('3000');
}, 3000);
