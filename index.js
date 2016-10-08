var recipes = {
  "Vegan" : "Tofu Stirfry",
  "Asian" : "Basil Fried Rice"
};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign( {}, object, { key: value } );
  object[`${key}`] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[`${key}`] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var copy = Object.assign( {}, object );
  delete copy[`${key}`];
  return copy;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[`${key}`];
  return object;
}
