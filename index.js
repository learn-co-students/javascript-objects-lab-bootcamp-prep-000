var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  var blah = Object.assign({}, obj)
  blah[key] = value
  return blah
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var exDee = Object.assign({}, obj)
  delete exDee[key]
  return exDee
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}