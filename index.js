const recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  const item = Object.assign({}, object)
  return delete item[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
 return delete object[key]
}


  // 1) Objects defines a `recipes` object:
  
  // 2) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
  
  // 3) Objects updateObjectWithKeyAndValue(object, key, value) it does not modifythe original object, but rather returns a clone with the new data:
  
  // 4) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:.js:31:7)

  // 5) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
  
  // 6) Objects deleteFromObjectByKey(object, key) does not modify the original object  key) returns object without the delete key/value pair:
     
  // 8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
     