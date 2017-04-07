var recipes = {"key" : "value"};

var updateObjectWithKeyAndValue = function(object, key, value){
  //var newObject = Object.assign({}, object)
  //newObject.key = value
  object[key] = value;
  return object;
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key] = value;
  return object;  
}

var deleteFromObjectByKey = function(object, key){
  //delete object[key];
  var newObject = Object.assign({}, object);
  delete newObject.key;
  return object;  
}

var destructivelyDeleteFromObjectByKey = function(object, key){
  delete object.key;
  return object;
}