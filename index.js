var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  recipes [key] = value;
  return recipes;
}

function updateObjectWithKeyAndValue (object, key, value){
 return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key){
  var objectClone = Object.assign({}, objectClone);
  delete objectClone.key;
  return objectClone;
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];
}