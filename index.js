var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
 
  return obj
}

function deleteFromObjectByKey(object, key){
  Object.assign({}, object)
  delete Object[key];
  return Object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}