var recipes = {}

function copyObj(obj){
  return Object.assign({}, obj);
}

function updateObjectWithKeyAndValue(object, key, value){
  var copy = copyObj(object);
  copy[key] = value;
  return copy;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  var copy = copyObj(object);
  delete copy[key];
  return copy;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}