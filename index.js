var recipes = {recipes}

var object = {object}
function updateObjectWithKeyAndValue(object, key, value) {
  return object
}

var object = {object}
function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {prop2: 2})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.prop2 = "2"
  return object
}

var newObj = Object.assign({}, object)
function deleteFromObjectByKey(object, key) {
 return newObj 
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
    return object
}