//Objects updateObjectWithKeyAndValue(object, key, value)
//      1) returns an object with the orignal key value pairs and the new key value pair
//      2) does not modify the original object, but rather returns a clone with the new data
//      3) returns an object with an updated key value pair

//const recipe = { bacon: 3 }

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]:value})
}

//destructivelyUpdateObjectWithKeyAndValue(object, key, value)
//      ✓ updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

// deleteFromObjectByKey(object, key)
//      ✓ deletes `key` from a clone of object and returns the new object (it is non-destructive)
//      ✓ does not modify the original object (it is non-destructive)
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}

//destructivelyDeleteFromObjectByKey(object, key)
//      ✓ returns object without the delete key/value pair
//      ✓ modifies the original object
function deleteFromObjectByKey(object,key){
    var ObjNew = Object.assign({},object);
    delete ObjNew[key];
    return ObjNew;}