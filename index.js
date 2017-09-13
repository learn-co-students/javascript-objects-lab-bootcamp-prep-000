var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipes = Object.assign({},object,{[key]:value});
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var property = key
  object[property] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({},object);
  var prop = key
  delete newObject.prop;
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key){
  var prop = key;
  delete object.prop;
  return object;
}
