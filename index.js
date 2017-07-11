var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(recipes, object, { [key]: value })

  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;

  return object;
}

function deleteFromObjectByKey(object, key) {
  delete object.key;

  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;

  return object;
}
