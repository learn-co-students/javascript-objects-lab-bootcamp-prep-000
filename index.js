var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return new Object({});
}

function destructivelyDeleteFromObjectByKey(object, key) {
  object = delete object[key];
  return new Object([]);
}