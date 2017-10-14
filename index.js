var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value){
  return Object.assign({}, object, {[key]: value });
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key]= value;
  return object;
}

var deleteFromObjectByKey = function(object, key){
var object = {};
var newObject = Object.assign({}, object);
delete newObject.object;
return object;
}

var destructivelyDeleteFromObjectByKey = function(object, key){
  delete object[key];
  return object;
}
