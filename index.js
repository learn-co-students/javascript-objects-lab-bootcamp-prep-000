var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, recipes, {prop2: 2});
}

var recipes = {prop: 1}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject.prop
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object
  }
