var recipes = {key: 'value'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key) {
  return delete object.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}