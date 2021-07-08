let recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  let newObject = Object.assign({}, object, {[key]:value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object = Object.assign(object, { [key]:value });
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}