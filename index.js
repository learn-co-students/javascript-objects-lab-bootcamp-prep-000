var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newobject = Object.assign({},object)
  newobject[key]=value
  return newobject
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

