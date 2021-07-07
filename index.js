var recipes = {
  'brussel sprouts': '1 lb',
  oil: '2 tbsp',
  salt: 'pinch'
}

function updateObjectWithKeyAndValue (obj, key, value) {
  var newObject = Object.assign({}, obj, {[key]: value})
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, {[key]: value})
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
