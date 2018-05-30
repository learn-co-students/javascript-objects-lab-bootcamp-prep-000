var recipes = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
     object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
 return delete object.key;
}
function destructivelyDeleteFromObjectByKey(object, key){
return delete object[key];
  
}