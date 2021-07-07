var recipes = new Object ({});

function updateObjectWithKeyAndValue(object, key, value) {
object [key] = value;
return object;
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({},object,{[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object [key]= value; 
  return object;
}
function deleteFromObjectByKey(object, key) {
  var bj = Object.assign ({}, object);
  delete bj[key];
  return bj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object [key];
  return object 
}
