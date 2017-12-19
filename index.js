var recipes = {egg: 1, water: '1cup'}
function updateObjectWithKeyAndValue(recipes, ingredients, value){
  return Object.assign ({}, recipes, { [ingredients]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredients, value) {
  recipes[ingredients] = value
  return recipes 
}

function deleteFromObjectByKey(recipes, ingredients){ 
  return Object.assign({},delete recipes.ingredients)
}

function destructivelyDeleteFromObjectByKey (recipes, ingredients) {
  delete recipes[ingredients]
  return recipes }
   



