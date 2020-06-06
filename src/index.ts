import './style.scss';
import { createElement } from './framework';
import { Binding } from './framework/binding';
import { state } from './framework/init';

const App = createElement('div', 'test');

// @ts-ignore
new Binding({
  object: state,
  property: 'a',
}).addBinding(App, 'innerHTML');

document.querySelector('#root').appendChild(App);


state.a = 12455;
