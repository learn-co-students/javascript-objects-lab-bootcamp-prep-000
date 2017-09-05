//1
var recipes = {};

//2
function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({},object,{[key]:value});
}

//3
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value;
  return object;
}

//4
/*function deleteFromObjectByKey(object,key) {
  return Object.assign({},object,{});
}*/

function deleteFromObjectByKey(object,key) {
  var newObj = Object.assign({},object);
  delete newObj[key];
  return object;
}

//5
function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key];
  return object;
}
