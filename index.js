var recipes = {
  prop: "1"
};

function updateObjectWithKeyAndValue(object, key, value){
  recipes.prop2 = '2';
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value){
  recipes.prop2 = '2';
  return recipes;
}

function deleteFromObjectByKey(recipes,prop){
  var newRecipe = Object.assign({}, recipes);
  delete newRecipe.prop;
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(recipes, prop){
  delete recipes.prop;
  return recipes;
}