var recipes={}
function updateObjectWithKeyAndValue(object, key, value) {
 
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
function deleteFromObjectByKey(object, key){
  var dupeRecipe = recipes
  delete object.key
  return dupeRecipe
}
function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key]
}
