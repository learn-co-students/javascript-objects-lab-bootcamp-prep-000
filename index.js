
let recipes = []

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

//it does not modifythe original object, but rather returns a clone with the new data
// returns an object with the orignal key value pairs and the new key value pair:

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  let newObject = object
  return newObject
  }
  //updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
  //destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {


function deleteFromObjectByKey(object, key) {
  var newobj = Object.assign({}, object);
  delete newobj[key]
  return newobj
}
/*

  recipies
}

function updateObjectWithKeyAndValue(object, key, value) {
  
}
//it does not modifythe original object, but rather returns a clone with the new data



function deleteFromObjectByKey() {
  
}

var obj = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 

obj // { foo: 'bar' }
*/
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
} 
//returns object without the delete key/value pair:
//modifies the original object:

obj // { foo: 'bar' }

