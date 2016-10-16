var recipes = new Object();

function updateObjectWithKeyAndValue(obj, key , value) {
  return Object.assign({}, obj, {[key]: value});
}

updateObjectWithKeyAndValue(recipes, 'key', 'value');

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'key', 'value');

function deleteFromObjectByKey(object,key) {
  var recipes = new Object();
  return recipes;
}

deleteFromObjectByKey();

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes.key;
  return recipes;
}

destructivelyDeleteFromObjectByKey();
