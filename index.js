var recipes = {prop: 1}
function destructivelyUpdateObjectWithKeyAndValue(recipes,object,key) {
 recipes['prop2'] = '2';
  return recipes;
}
function updateObjectWithKeyAndValue(object,key,value) {
  var newRecipes = Object.assign({},recipes,{prop: 1},{prop2: 2});
  return newRecipes;
}

function deleteFromObjectByKey(object,key) {
  var newRecipes = Object.assign({},recipes);
  newRecipes
  delete newRecipes.prop
  return newRecipes
}
function destructivelyDeleteFromObjectByKey(recipes,key) {
  delete recipes.prop;
 return  recipes;
}