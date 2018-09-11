var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes.ingredients = "flour";
  recipes.prop = "1";
  recipes.prop2 = "2";
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop', '1');
destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop', '2');

function deleteFromObjectByKey(object, key) {
  
  var recipes = {
      prop : 1
  };
  
  var newRecipes = Object.assign({}, recipes);
  
  delete newRecipes.prop;
  
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}