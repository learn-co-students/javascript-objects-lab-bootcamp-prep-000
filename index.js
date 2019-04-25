var recipes = {}

//function updateObjectWithKeyAndValue(recipes, key, value){
  //recipes[key] = value
  //return recipes
//}

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value
  return recipes
}

//function deleteFromObjectByKey(recipes, key){
 //delete recipes.key
 // return recipes
//}

function deleteFromObjectByKey(recipes, key){
  var recipes2 = Object.assign({}, recipes, key)
  delete recipes2[key]
  return recipes2
 }

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes
}