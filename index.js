var recipes = { coffee: 'decaf' };

function updateObjectWithKeyAndValue(object, key, value) {
  return recipes;
}

var newrecipes = { prop: 1 };
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, newrecipes, {[key]: value} 
  );
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key) {
  delete object.key;
  return Object.assign ({}, newrecipes, {[key]: value});
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
