var recipes = {"cake":"flour"}

function updateObjectWithKeyAndValue(object,key,value){
var newObj = Object.assign({}, object)
newObj[key] = value;

return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key, value){
  var newObj = Object.assign({},object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key, value){
  delete object[key];
  return object;
}
