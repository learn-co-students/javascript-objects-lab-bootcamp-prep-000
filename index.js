var recipes={}

function updateObjectWithKeyAndValue(object, key, value){
  var updatedObj=Object.assign({}, object)
  updatedObj[key]=value;
  return updatedObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}
function deleteFromObjectByKey(object, key){
  var updatedObj=Object.assign({}, object)
  delete updatedObj[key];
  return updatedObj;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
