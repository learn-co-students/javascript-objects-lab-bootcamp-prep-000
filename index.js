var recipes = {
  key1: 'value1'
}

// 1) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:

// 2) Objects updateObjectWithKeyAndValue(object, key, value) it does not modifythe original object, but rather returns a clone with the new data:

function  destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
// updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object:
  object[key] = value
  return object
}

// 4) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):

// 5) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):

function deleteFromObjectByKey(object, key) {
// does not modify the original object (it is non-destructive):
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

// 7) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key] 
  return object
}

