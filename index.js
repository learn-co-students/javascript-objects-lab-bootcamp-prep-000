var recipes = { foo: 'bar'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object // unclear from error message why object has to be returned
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object 
}
