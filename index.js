var recipes = new Object(undefined);
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object,{[key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
var updatedObject = object;
delete updatedObject.key;
return updatedObject;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}