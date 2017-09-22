var recipes = new Object ();


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newRecipes = Object.assign({}, {key:object});
  delete newRecipes[key]
  //return object;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
