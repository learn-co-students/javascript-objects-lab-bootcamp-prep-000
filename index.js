var recipes = { hamburger:"beef" } ;

function updateObjectWithKeyAndValue(recipes, ingredient, seasoning){
var meat = {[ingredient]: seasoning}
return Object.assign ({}, recipes, meat)

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, seasoning){
  recipes [ingredient] = seasoning
  return recipes
  
}

function deleteFromObjectByKey(recipes, ingredient){
 var dinner = Object.assign ({}, recipes)
 delete dinner[ingredient]
 return dinner
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient){
delete recipes[ingredient]
return recipes
}