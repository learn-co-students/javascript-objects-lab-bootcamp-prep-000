var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  //returns a clone of `object` by adding `key` and `value` (it is non-destructive)
  //var newObject = {};
  return Object.assign({}, object, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //updates `object` with the given `key` and `value` (it is destructive)
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  // updates `object` with the given `key` and `value` (it is non-destructive)
  const newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  //deletes `key` from object and returns object
  delete object[key];
  return object;
}
