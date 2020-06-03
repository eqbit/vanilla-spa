import './style.scss';
import { createElement } from './framework';

const App = () =>
  createElement('div', `
    <div class="test">
        test text
    </div>
  `);

document.querySelector('#root').appendChild(App());
