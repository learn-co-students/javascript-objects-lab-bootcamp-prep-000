
var recipes = new Object({key: 'value'});

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, {[key]: value});
}

function destructivelyDeleteFromObjectByKey(object, key) {
delete object[key];
return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

