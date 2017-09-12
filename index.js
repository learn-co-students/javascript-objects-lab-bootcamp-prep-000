var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({},object, key)
  var newObj = delete obj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}
