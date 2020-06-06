import { Binding, state, stateKeys } from '.';

interface Options {
  container?: 'div' | 'span';
  value?: string | null;
}

export const createElement = (
  {
    container = 'div',
    value = null,
  }: Options,
) => {
  const element = document.createElement(container);
  const stateKey = stateKeys.getNewKey();
  
  new Binding({
    object: state,
    property: stateKey,
  }).addBinding(element, 'innerHTML');
  
  state[stateKey] = value;
  
  return {
    element,
    setValue: (newValue) => {
      state[stateKey] = newValue;
    },
  };
};
