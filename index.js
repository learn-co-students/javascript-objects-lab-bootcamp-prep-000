var recipes = {};

function updateObjectWithKeyAndValue(recipes, prop, value) {
  return Object.assign({}, recipes, { prop: 1 }, { prop2: 2 });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop, value) {
  value = 1;
  recipes['prop2'] = 2;
  return recipes;
}

function deleteFromObjectByKey(recipes, prop) {
  recipes.prop = 1;
  var newObj = Object.assign({}, recipes);
  delete newObj.prop;
  return recipes, newObj;
}

function destructivelyDeleteFromObjectByKey(recipes, prop) {
  recipes.prop = 1;
  delete recipes.prop;
  return recipes;
}

