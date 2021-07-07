let recipes = {};

//updateObjectWithKeyAndValue(object, key, value)
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

//destructivelyUpdateObjectWithKeyAndValue(object, key, value)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

//deleteFromObjectByKey(object, key)
function deleteFromObjectByKey(object, key){
  let newRecipes = Object.assign({}, object);
  delete newRecipes[key]
  return newRecipes
}

//'destructivelyDeleteFromObjectByKey(object, key)'
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}


