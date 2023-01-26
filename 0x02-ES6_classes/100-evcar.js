import Car from './10-car';

export default class EVCar Extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }
  
  clonercar() {
    return new Car(this.brand, this.motor, this.color, this.range);
  }
}
