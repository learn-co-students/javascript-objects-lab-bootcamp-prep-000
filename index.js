const recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  const obj = Object.assign({}, object)
  obj[key] = value;
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  const obj = Object.assign({}, object);
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
