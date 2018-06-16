var recipes = {}

function updateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign({[k]:v}, obj)
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, v) {
  obj[k] = v
  return obj
}

function deleteFromObjectByKey(obj, k) {
  var newObj = Object.assign({}, obj)
  delete newObj[k]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, k) {
  delete obj[k]
  return obj
}
