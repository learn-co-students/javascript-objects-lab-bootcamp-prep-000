//   1) Objects defines a `recipes` object:
//   2) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
//   3) Objects updateObjectWithKeyAndValue(object, key, value) it does not modify the original object, but rather returns a clone with the new data:
//   4) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with
//   the given `key` and `value` (it is destructive) and returns the entire updated object:
//   5) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
//   6) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
//   7) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
//   8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:

const recipes = new Object();

console.log(recipes);

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, {[key]: value})
  return object
}

function deleteFromObjectByKey(object, key) {
  const newObj =  Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
