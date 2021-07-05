var recipes = {spice:"pepper", Eggs : 2}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key) {
  var newObject = Object.assign({}, object)
  delete newObject.key
  return newObject
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj.key
  return obj
}
