
var recipes = { breakfast: "oatmeal"};
 function updateObjectWithKeyAndValue(recipes, lunch, salad) {
  return Object.assign({}, recipes, { [lunch]: 2 })
}
 function destructivelyUpdateObjectWithKeyAndValue(recipes, lunch) {
  recipes[lunch] =  2
  return recipes;
}
 function deleteFromObjectByKey(recipes, breakfast) {
  var recipes = Object.assign({}, recipes, breakfast);
  var newRecipes = delete recipes[breakfast];
  return newRecipes;
}
 function destructivelyDeleteFromObjectByKey(recipes, breakfast) {
  delete recipes[breakfast];
  return recipes
}
