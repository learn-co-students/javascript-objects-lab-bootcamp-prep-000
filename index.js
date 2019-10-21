var recipes = {
  prop: 1
};

var obj = { prop: 1 };

function updateObjectWithKeyAndValue(object, key, value) {
  // var object = [recipes];
  object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var destroyable = Object.create(recipes);
  delete destroyable[key];
  return destroyable;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
