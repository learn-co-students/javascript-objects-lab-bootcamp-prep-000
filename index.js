var recipes = {breakfast: "potato"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
  }


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object
}

function deleteFromObjectByKey(object, key) {
var object = {}
delete object[key]
return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
