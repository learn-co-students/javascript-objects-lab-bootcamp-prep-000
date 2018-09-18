var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, { [key]: value })
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}

function deleteFromObjectByKey(object, key) {
  var object = {key}
  var newObj = Object.assign({}, object )
  return newObj
}