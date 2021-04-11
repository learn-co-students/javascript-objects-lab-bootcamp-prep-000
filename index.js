function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign ({}, object, {[key] : value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
const object = { key: '3' };
 
function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, object);
  delete clone[key];
  return clone;
  }

function destructivelyDeleteFromObjectByKey(object, key){
delete object[key];
return object;
}