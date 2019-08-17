var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  let newObj = {};
  Object.assign(newObj, object, {[key]: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey (object, key) {
  return Object.assign({}, object, {[key]: undefined});
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key];
  return object;
}