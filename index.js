// 1) Objects defines a `recipes` object:

var recipes = {
  breakfast: ["cereal", "milk", "fruit", "juice"],
  lunch: ["coffee", "sandwich", "pie"],
  dinner: ["nothing"],
};

// 2) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:

// 3) Objects updateObjectWithKeyAndValue(object, key, value) it does not modify the original object, but rather returns a clone with the new data:

var updateObjectWithKeyAndValue = (object, key, value) => Object.assign({}, object, {[key]: value});

// 4) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and re
// turns the entire updated object:

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
}

// 5) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):

// 6) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):

var deleteFromObjectByKey = (object, key) => {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

// 7) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:

// 8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:

var destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key];
  return object;
}
