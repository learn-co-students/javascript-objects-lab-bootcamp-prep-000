var recipes = {Chicken: "194"}

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var copy = Object.assign({}, obj)
  delete copy[key]
  return copy
}

function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj[key]
  return obj
}