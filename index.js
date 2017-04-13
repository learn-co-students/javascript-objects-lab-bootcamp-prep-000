var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var temp_obj = Object.assign({}, obj)
  delete temp_obj.key
  return temp_obj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj.key
  return obj
}
