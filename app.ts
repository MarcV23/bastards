import { ApiValidator } from './validator';

import { barSchema, barObj, barObjF } from './examples/bars';
import { carSchema, carObj, carObjF } from './examples/cars';
import { personSchema, personObj, personObjF } from './examples/persons';

const validator = new ApiValidator();

console.table({
    barObj: validator.validate(barSchema, barObj),
    barObjF: validator.validate(barSchema, barObjF)
});

// Bar
console.log('-- Bar --')
console.table({
    barObj: validator.validate(barSchema, barObj),
    barObjF: validator.validate(barSchema, barObjF)
});

// Car
console.log('-- Car --')
console.table({
    carObj: validator.validate(carSchema, carObj),
    carObjF: validator.validate(carSchema, carObjF)
});

// Person
console.log('-- Person --')
console.table({
    personObj: validator.validate(personSchema, personObj),
    personObjF: validator.validate(personSchema, personObjF)
});