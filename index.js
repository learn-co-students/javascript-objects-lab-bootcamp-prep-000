var recipes = { };

function updateObjectWithKeyAndValue(object, key, value){
  var tempRecipes = Object.assign({}, object);
  tempRecipes[key] = value;
  return tempRecipes;
}

// function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
//   object[key] = value;
//   return object;
// }

function deleteFromObjectByKey(object, key){
  var tempRecipes = Object.assign({}, object);
  delete tempRecipes[key];
  return tempRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}


