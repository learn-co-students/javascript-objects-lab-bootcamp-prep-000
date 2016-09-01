var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object,{[key]:value})
  //returns a clone of `object` by adding `key` and `value` (it is non-destructive)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
  //updates `object` with the given `key` and `value` (it is destructive)
}

function deleteFromObjectByKey(object, key){
  var away = Object.assign({}, object);
  delete away[key];
  return away;
  //deletes `key` from a clone of object and returns the new object (it is non-destructive)
}
function destructivelyDeleteFromObjectByKey(object, key){
// deletes `key` from object and returns object:
delete object[key]
return object;
}
