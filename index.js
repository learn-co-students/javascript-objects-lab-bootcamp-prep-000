var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
const obj = { prop: 1 }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}


function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key]
  return newObj
}
//const obj = { prop: 1 }

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}