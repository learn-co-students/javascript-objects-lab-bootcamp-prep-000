var recipes = { salad: 'lettuce' };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
  object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var anotherObject = Object.assign({}, object);
  delete anotherObject[key];
  return anotherObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
