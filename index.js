var recipes = {};
var obj = {prop: "1"};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, {prop2: "2"});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return obj;
}
destructivelyUpdateObjectWithKeyAndValue(obj, "prop2", "2");

function deleteFromObjectByKey(object, key) {
 var newObj = delete obj.prop2;
   return newObj;
}
 function destructivelyDeleteFromObjectByKey(object, key) {
   var newObj = delete object[key];
   return newObj;
 }
 destructivelyDeleteFromObjectByKey(newObj, "prop");