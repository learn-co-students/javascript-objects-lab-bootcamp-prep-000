var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
 let newObj = Object.assign({}, object);
 delete newObj[key];
 return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object; 
}
/*
stuff = {flour: 'lots', sugar: 'many', salt: 'none', dairy: 'little'};
console.log(stuff);
console.log(destructivelyDeleteFromObjectByKey(stuff.flour));
*/
