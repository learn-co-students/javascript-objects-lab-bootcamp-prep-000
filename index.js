var recipes = {
  cookies: 'chocolate chip'
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, { [key]: value} );
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key]
  return newObject
}