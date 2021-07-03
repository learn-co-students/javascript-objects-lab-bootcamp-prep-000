var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( {}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var recipeMod = Object.assign({}, object);
  return delete recipeMod[key];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}
