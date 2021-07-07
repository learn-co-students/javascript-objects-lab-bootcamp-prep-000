var recipes = {
}

function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, object, {[key]: value}) 
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object.prop2 = 2;
return(object)
}

function deleteFromObjectByKey(object, key, value) {
  recipes = Object.assign({},object, {[key]: value})
  
  delete recipes.key;
  return(recipes);
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key];
  return(object);
}