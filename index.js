var recipes = {1: 'flour'}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value })
}

function deleteFromObjectByKey(object, key) {
  var recipes2 = Object.assign({}, recipes)
  delete object.key
  return recipes2
}