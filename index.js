var recipes = {
  thai: "soups"
}

function updateObjectWithKeyAndValue(recipes, orgin, type) {
  return Object.assign({}, recipes,{[orgin] : type})
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, orgin, type){
  recipes[orgin] = type;
  return recipes
}
function deleteFromObjectByKey(recipes, orgin){
  var recipe = Object.assign({}, recipes)
  delete recipe.orgin;
  return recipe
}
function destructivelyDeleteFromObjectByKey(recipes, orgin){
  delete recipes.orgin;
  return recipes
}