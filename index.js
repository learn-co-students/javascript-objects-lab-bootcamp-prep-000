var recipes = {};
function updateObjectWithKeyAndValue(obj,key,value){
  var copy = Object.assign({},obj);
  copy[key] = value;
  return copy;
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key] = value;
  
  return obj;
}
function deleteFromObjectByKey(object, key){
  var copy = Object.assign({},object);
  
  delete copy[key];
  
  return copy;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  
  return object;
}










