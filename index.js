var recipes = {}

function updateObjectWithKeyAndValue(recipes, prop2, amount){
 return Object.assign({}, recipes, {prop2: amount})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, eggs, vsimon){ 
 recipes[eggs] = vsimon
 return recipes
}
function deleteFromObjectByKey(recipes, eggs) {
 var newrecipes = Object.assign({},recipes)
  return delete newrecipes.eggs
}
function destructivelyDeleteFromObjectByKey(recipes, eggs){
   
   delete recipes[eggs]
   return recipes
   
}
