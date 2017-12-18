var recipes = { mac: "Mac and Cheese" };

function updateObjectWithKeyAndValue(recipes, collard, collardGreens){
  return Object.assign({}, recipes, {prop2: "2"});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, chick, friedChicken){
  recipes.prop2 = "2";
  return recipes;
}

function deleteFromObjectByKey(recipes, mac){
 var recipe = { prop1: '1', prop2: '2' };
 var newRecipe = Object.assign({}, recipe);
 delete newRecipe.mac;
 return newRecipe;
}

function destructivelyDeleteFromObjectByKey(recipes, mac){
  var recipe = delete recipes.prop1;
  return recipe;
  }