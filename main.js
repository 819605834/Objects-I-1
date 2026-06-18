// Write your code below
function getValue(obj, key) {
    if (obj === undefined || obj === null) return 'null';
    if (!Object.hasOwn(obj, key)) return 'undefined';

    return obj[key];
}
var c = 'ee'
var car = {
  name: 'Tesla'
};

var value = getValue(c, 'name');
console.log(value);
value = getValue(car, 'name');
console.log(value);