// 1) Objects defines a `recipes` object:
var recipes = {[recipes]: 'object'}


// 2) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},{prop:1},{prop2:2} )
}



  //4) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    
    if(object !== null){
         object[key] = value;
    }
    
  return object;
}


//   5) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):

function deleteFromObjectByKey(object, key){
   delete object.key
}


//   6) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
function deleteFromObjectByKey(object, key) {
  var obj = delete object.key
  return obj;
}


//   7) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:

function destructivelyDeleteFromObjectByKey(object, key){
  
  return Object.assign({}); 
}


//   8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:

function  destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key] 
  return object
   
}

