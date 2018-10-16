var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({},object,key,value)
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object
} //ok

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
} //ok

function deleteFromObjectByKey(object, key) {
  var newobject = Object.assign({},object)
  delete newobject[key]
  return newobject
} //ok

