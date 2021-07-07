var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, {[key]: value}, object);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  return delete Object.assign({})[key];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}