var recipes = {}

function updateObjectWithKeyAndValue(recipes,key,value){
  return Object.assign({},recipes,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes,key,value){
  return Object.assign(recipes,{[key]:value})
}

function deleteFromObjectByKey(recipes,key){
  var lessRecipes = Object.assign({},recipes[key])
  delete lessRecipes.key
  return lessRecipes
}

function destructivelyDeleteFromObjectByKey(recipes,key){
  delete recipes[key];
  return recipes
}