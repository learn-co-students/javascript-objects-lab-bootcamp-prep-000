var recipes = {ingredient: 'amount'};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key,) {
  var object = {key: 'value'};
  var newObject = Object.assign({}, object);
  delete newObject.key;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}