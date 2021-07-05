var recipes = {prop: 1};
var newRecipes = Object.assign(recipes);

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {['prop2']: "2"});
  // in previously lab, the "{}" was failed
  // now it is okay. Why?
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes['prop2'] = '2';
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  delete newRecipes['prop'];
  return Object.assign(newRecipes);
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
 delete recipes['prop'];
 return recipes;
}

