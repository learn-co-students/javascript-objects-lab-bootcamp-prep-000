var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign(object, {[key] : value});
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key] : value, [key] : value});
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, key); 
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
