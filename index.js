var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  Object.assign({key:value})
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){
  return Object.assign({}, object, { key });
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object;
}
