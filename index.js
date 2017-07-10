var recipes = {};
// passed


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
// passed

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}
// passed

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj
}
// passed

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object
}
