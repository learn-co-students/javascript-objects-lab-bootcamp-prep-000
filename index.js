var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  var object = Object.assign({}, obj, { [key]: value });
  return object;

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;

  return object;

}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},recipes);
  delete newObj.recipes;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;

}
