var recipes = {FirstIngredient: "milk"}
function Objects(FirstIngredient, milk){
  
}
function updateObjectWithKeyAndValue(recipes, SeconddIngredient, butter){
  return Object.assign({}, recipes, {[SeconddIngredient]: butter})
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, ThirdIngredient, salt){
  recipes[ThirdIngredient]=salt
  return recipes
}
function deleteFromObjectByKey(){
  var recipe= recipes
  delete recipe.FirstIngredient
return recipe
}
function destructivelyDeleteFromObjectByKey(recipes, FirstIngredient){
  delete recipes[FirstIngredient]
  return recipes
}

