var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(recipes, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = recipes
  return delete newObj[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}
