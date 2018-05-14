const recipes = {key: 'value'};
const newRecipes = Object.assign({}, recipes);

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key){
  delete newRecipes.key;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key];
  return recipes;
}
