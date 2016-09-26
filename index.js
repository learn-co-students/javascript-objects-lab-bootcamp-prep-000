var recipes = new Object({ object: 'recipes' })

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = { key: 'value'}
  var newObj = Object.assign({}, obj)
  newObj // { key: 'value' }
  delete newObj.key // true
  newObj // {}
  obj // { key: 'value' }
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
