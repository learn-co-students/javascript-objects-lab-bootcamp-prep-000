var recipes = {meatballs: "meat"}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 }
  return Object.assign({}, obj, {[key]: value})
}
var obj = { prop: 1 }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object
}
