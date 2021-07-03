var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object, { [key]: value })
  recipes.prop2 = 2
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object, key)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObj = object
  delete newObj[key]
  return newObj
}