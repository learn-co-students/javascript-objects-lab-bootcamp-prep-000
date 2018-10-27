var recipes = {};



function updateObjectWithKeyAndValue(object, key, value){
 var copy = Object.assign({}, object);
 copy[key] = value;
 copy.key = copy;
  return copy;
 
}
  
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
  
}

function deleteFromObjectByKey(object, key){
  recipes.key = recipes;
  delete recipes.key;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, recipes);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  recipes.key = recipes;
  delete recipes.key;
  delete object[key];
  return recipes;
  
}


