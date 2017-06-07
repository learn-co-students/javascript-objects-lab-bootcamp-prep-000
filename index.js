var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value){
  var newObject = Object.assign({},object,{[key]: value});
  return newObject;
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
    object[key] = value;
    return object;
}

var deleteFromObjectByKey = function(object, key){
  var toDelete = Object.assign({}, object, key);
  delete toDelete.key;
  return toDelete;
}

var destructivelyDeleteFromObjectByKey = function(object, key){
  delete object['key'];
  return object;
}
