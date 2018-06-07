var recipes = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  return recipes
}
updateObjectWithKeyAndValue(recipes, 'prop2', 2)

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2)

function deleteFromObjectByKey(object, key) {
  var newObj = delete recipes.key
  return newObj
}
deleteFromObjectByKey(obj, 'prop')

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
destructivelyDeleteFromObjectByKey(recipes, 'prop');
