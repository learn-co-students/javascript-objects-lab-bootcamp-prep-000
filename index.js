var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return { prop: 1 , prop2: 2 };
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  var recipes = { key: 'value'}
  var newObj = Object.assign({} , recipes)
  newObj
  delete newObj.key
  return {};
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return recipes;
}
