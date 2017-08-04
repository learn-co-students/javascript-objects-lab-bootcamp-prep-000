var recipes = {eggs : dozen}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newobject = delete object.key
  return newobject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

console.log(recipes)
