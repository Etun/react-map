import _ from 'lodash';

export function generateRandomPlaces() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    const obj = {};
    obj.name = `marker${i}`;
    obj.lat = Math.random() * 6;
    obj.lat = _.random(59, 60, true);
    obj.lng = _.random(29.6, 31, true);
    obj.text = `Place ${i}`;
    arr.push(obj);
  }
  return arr;
}