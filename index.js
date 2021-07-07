var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var kitties = Object.assign({}, object, {[key]: value});
  return kitties;
} 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
return object;
}

function deleteFromObjectByKey(object, key) {
var kitten = Object.assign({}, object);
    delete kitten[key];
    return kitten;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

