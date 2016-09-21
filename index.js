var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value){
  //object = Object.assign(object, key, value )
  object[key] = value;
  return object;
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  //object = Object.assign(object, key, value )
  object[key] = value;
  return object;
}

var deleteFromObjectByKey = function(object, key, value){
  //object = Object.assign(object, key, value )
  delete object.key;
  return object;
}

var destructivelyDeleteFromObjectByKey = function(object, key, value){
  //object = Object.assign(object, key, value )
  delete object.key;
  return object;
}
