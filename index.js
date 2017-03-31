var recipes = {
recipes : "object"
};
//passing
function deleteFromObjectByKey (recipes, meal){
delete recipes.prop2
return recipes
};
//passing
function destructivelyDeleteFromObjectByKey (recipes, meal){
  delete recipes.meal
  return recipes
};
//passing
function updateObjectWithKeyAndValue(recipes, meal, ingredients){
  return Object.assign({}, recipes, { [meal]: ingredients })
};
//passing
function destructivelyUpdateObjectWithKeyAndValue(recipes,meal, ingredients){
recipes[meal]=ingredients
return recipes
}
destructivelyUpdateObjectWithKeyAndValue(recipes, "1","2")
//failed
