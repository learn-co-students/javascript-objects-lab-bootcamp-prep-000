var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key] : value});
}

function deleteFromObjectByKey(object, key){
  var clone = Object.assign({},object, key);
  delete clone.key;
  return clone;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}