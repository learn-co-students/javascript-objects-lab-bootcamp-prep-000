var recipes = {typeof: 'object'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({prop: 1}, {prop2: 2})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes['prop'] = 1;
  recipes['prop2'] = 2
  return recipes
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, recipes)
  return delete newObj.prop
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  return delete recipes['prop']
}