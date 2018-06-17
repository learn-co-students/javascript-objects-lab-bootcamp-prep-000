var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var cloneOfObject = Object.assign({}, object)
  console.log(cloneOfObject)
  delete cloneOfObject[key]
  console.log(cloneOfObject, object)
  return cloneOfObject
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
