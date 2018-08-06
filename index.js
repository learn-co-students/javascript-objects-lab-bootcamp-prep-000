let recipes = {
  f: 'tomato',
  x: 'garlic',
};
let recipes2 = Object.assign({3: 'onion', y: 'peper'});
console.log(recipes2.x, recipes2.y);

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}
 function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
 function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}
 function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}