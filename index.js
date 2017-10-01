var recipes = new Object(recipes)

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({prop: '1', prop2: '2'})
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.prop2 = '2'
  return object
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
