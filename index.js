var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({ prop: 1 }, { prop2: 2 })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
 
 function deleteFromObjectByKey(object, key) {
var myNewObj = Object.assign({}, recipes)
return myNewObj
 }
 
function destructivelyDeleteFromObjectByKey(object, key) {
delete object[key];
return object;
}

