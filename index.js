var recipes = ({breakfast: 'bread'})

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)  {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var clone = object[key]
  delete object[key]
  return object
}

function deleteFromObjectByKey(object, key) {
  return object[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}