var recipes = new Object({}); 

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newrecipes = Object.assign({}, object);
  delete newrecipes[key]; 
  return newrecipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}