var recipes = {eggs: 3, chicken: 2, pancake: 'flour'};

function updateObjectWithKeyAndValue(recipes, type, quantity) {
  return Object.assign({}, recipes, { [type]: quantity });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, type, quantity) {
recipes[type] = quantity;
return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, type) {
   delete recipes[type];
   return recipes;
}

function deleteFromObjectByKey(recipes, type) {
  var newRecipes = Object.assign( {}, recipes);
  delete newRecipes[type];
  return newRecipes;
}
