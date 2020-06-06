export function Binding(b: any): void {
  const _this = this;
  this.elementBindings = [];
  this.value = b.object[b.property];
  this.valueGetter = () => _this.value;
  
  this.valueSetter = (val: any) => {
    _this.value = val;
    for (let i = 0; i < _this.elementBindings.length; i++) {
      const binding = _this.elementBindings[i];
      binding.element[binding.attribute] = val;
    }
  };
  
  this.addBinding = (element: any, attribute: any, event?: any) => {
    const binding: any = {
      element,
      attribute,
    };
    
    if (event) {
      element.addEventListener(event, () => {
        _this.valueSetter(element[attribute]);
      });
      
      binding.event = event;
    }
    this.elementBindings.push(binding);
    // eslint-disable-next-line no-param-reassign
    element[attribute] = _this.value;
    return _this;
  };
  
  Object.defineProperty(b.object, b.property, {
    get: this.valueGetter,
    set: this.valueSetter,
  });
  
  // eslint-disable-next-line no-param-reassign
  b.object[b.property] = this.value;
}
