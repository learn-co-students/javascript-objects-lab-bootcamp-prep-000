var recipes = {}
function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
/*Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns the
entire updated object:*/
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

 function deleteFromObjectByKey(object, key){
   delete object.key
   return object
 }
//Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
function deleteFromObjectByKey(object, key){
  var newObj = {}
  newObj = Object.assign({}, object)
  delete newObj.key
  return newObj
}

//Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
function deleteFromObjectByKey(object, key) {
  object = object[key]
  var newObj = {}
  newObj = Object.assign({}, object)
  delete newObj[key]
  return object, newObj
}

//Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
/*
function destructivelyDeleteFromObjectByKey(object, key){
  var newObj = {}
  newObj = Object.assign({}, object)
  delete newObj.key
  //object = Object.assign({}, object, key)
//  return object[key]
    return object[key]

}*/
function destructivelyDeleteFromObjectByKey(object, key){
var newObj = Object.assign({},object)
delete object[key]
object = Object.assign({},newObj)
return object[key]



}
//Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
