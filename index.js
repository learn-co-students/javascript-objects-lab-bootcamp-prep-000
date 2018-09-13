var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
    var recipes = {prop: 1};
      return Object.assign({}, { prop: 1}, { prop2: 2});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object[key] = value;
      return object
}
function deleteFromObjectByKey(object, key){
  var obj = {};
  var newObj = [];
  newObj;
  delete newObj.key;
  return obj;
}
 function destructivelyDeleteFromObjectByKey(object, key){
  var obj = {};
 
  delete object[key];
  return [key];
} 