var recipes = { pizza: 'cheese' }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value })
}

function deleteFromObjectByKey(object, key) {
  var deleteMe = Object.assign({}, object)
  return delete deleteMe[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}
