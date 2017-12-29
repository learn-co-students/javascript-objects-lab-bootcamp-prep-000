var recipes = {breakfast: 'pomme de terre'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { key: value })
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( {}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var cloneObject = Object.assign( {}, object);
  cloneObject[key] = undefined;
  return cloneObject
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
