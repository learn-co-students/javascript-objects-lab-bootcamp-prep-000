var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes,{[key]:value});

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key]=value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key){
var newRecipe = Object.assign({},recipes); //create new variable to hole obj. assign.
  delete newRecipe[key]; //then delete key
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(recipe, key) {
  delete recipe[key];
  return recipe;
}
