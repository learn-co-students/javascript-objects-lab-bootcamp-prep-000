const recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  const newObject = {};
  Object.assign(newObject, object, {[key]:value});
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  const newObject = Object.assign({}, object, key);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

