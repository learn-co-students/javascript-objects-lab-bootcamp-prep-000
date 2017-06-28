
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newobj = Object.assign({}, object);
  delete newobj[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
