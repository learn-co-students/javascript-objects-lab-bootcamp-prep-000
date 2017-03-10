var recipes = {};
var newObj = Object.assign({}, recipes)


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
};


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  //updates `object` with the given `key` and `value` (it is destructive)
  object[key] = value;
  return object;
};

function updateObjectWithKeyAndValue(object, key, value) {
  //returns a clone of `object` by adding `key` and `value` (it is non-destructive)
    return Object.assign({}, object, { [key]: value });
};


function  deleteFromObjectByKey(object, key) {
  // deletes `key` from a clone of object and returns the new object (it is non-destructive)
delete newObj.key;
return object;
};
