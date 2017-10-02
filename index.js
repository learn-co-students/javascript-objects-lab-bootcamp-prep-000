var recipes = {
  Bread : 'Flour',
  Sugar : 'Salt'
}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop :1 };
  recipes = Object.assign({}, object, { [key]: value})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = {key: 'value'};
  var newObj = Object.assign({}, obj);
  delete newObj.key;
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
