var recipes = { prop: 1 }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, delete object.key)
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
