var recipes = {"milk": "1/2 cup"}

function updateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign({}, obj, {[k]: v})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
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
