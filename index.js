var recipes={
  egg:"3",
  flour:"2cups",
  butter:"1tsp",
  sugar:"1/2cup"
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
  
}

function  destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newRecipe= Object.assign({}, object);
  delete newRecipe[key];
  return newRecipe;
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}