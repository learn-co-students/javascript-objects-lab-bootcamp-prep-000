var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj= Object.assign({}, object, { [key]: value})
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj = key
  var newObj = Object.assign({}, obj[key])
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = key
  delete obj[key]
  return object
}
