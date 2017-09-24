var recipes = { prop: '1' }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
updateObjectWithKeyAndValue(recipes, 'prop2', '2')

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'dinner', 'steak')

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}
deleteFromObjectByKey(recipes, 'prop2')

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
destructivelyDeleteFromObjectByKey(recipes, 'dinner')
