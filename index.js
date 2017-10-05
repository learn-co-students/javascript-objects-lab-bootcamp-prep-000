var recipes = {}

/*<<<<<<< HEAD
function updateObjectWithKeyAndValue(object, key, value ) {
var object = {key: value}
var copy = Object.assign({}, object, {key: value})
return object
return copy

}
*/


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  const newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
