var recipes = {"milk": "1/2 cup"}

function updateObjectWithKeyAndValue(obj, k, v) {
  var newObj = Object.assign({}, obj, {[k]: v})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
