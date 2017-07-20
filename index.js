var recipes = {};
  // return Object.assign({}, obj, { [key]: value })
function updateObjectWithKeyAndValue(object,key,value){
  // object[key]=value;  return object;
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;return object;
}

function deleteFromObjectByKey(object,key){
  var newObj = Object.assign({},object);
  delete newObj[key];
  return newObj
}

function destructivelyDeleteFromObjectByKey(object,key){delete object[key];return object}
// 6) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
//    ReferenceError: deleteFromObjectByKey is not defined
//     at Context.<anonymous> (test/index-test.js:54:7)
// 7) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
//    ReferenceError: destructivelyDeleteFromObjectByKey is not defined
//     at Context.<anonymous> (test/index-test.js:62:20)
// 8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
//    ReferenceError: destructivelyDeleteFromObjectByKey is not defined
//     at Context.<anonymous> (test/index-test.js:69:20)
