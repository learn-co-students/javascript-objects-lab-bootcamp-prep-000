var recipes = new Object();

var updateObjectWithKeyAndValue = function(object, key, value){
  return Object.assign({}, object, { [key]: value });
}

var destructivelyUpdateObjectWithKeyAndValue = function(object,key,value){
  object[key] = value;
  return object;
}

var deleteFromObjectByKey = function(object,key){
  var cloner = Object.assign({}, object);
  delete cloner[key];
  return cloner;
}

var destructivelyDeleteFromObjectByKey = function(object,key){
  delete object[key];
  return object;
}
