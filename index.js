var recipes = {key: "value"};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
 var newObject = Object.assign({}, object, {[key]: value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign(object, delete[key])
  return newObject;
}

function deleteFromObjectByKey(object, key) {
  var cloneObject = {object}
  var newObject = Object.assign({}, cloneObject, delete[key])
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}