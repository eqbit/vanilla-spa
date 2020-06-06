(window as any).state = {};

export const { state } = (window as any);

class StateKeys {
  key: number;
  
  constructor() {
    this.key = 0;
  }
  
  getNewKey() {
    return this.key++;
  }
}

const stateKeys = new StateKeys();
export { stateKeys };
