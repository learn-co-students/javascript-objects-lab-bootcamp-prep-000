var recipes = {
   K1: "V1",
   K2: "V2"
 };

// Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair. (non-destructive)

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
};

// 3) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object:

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
};

// Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive)

function deleteFromObjectByKey(object, key) {

var newObject = Object.assign({}, object);
delete newObject[key];
return newObject;

};

// Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:

function destructivelyDeleteFromObjectByKey(obj, key) {

delete obj[key];
return obj;

};
