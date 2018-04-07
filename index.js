var recipes = {}
function updateObjectWithKeyAndValue(o,key,value){
  return Object.assign({},o,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(O,Key,Value){
  O[Key] = Value
  return O
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  
  delete object[key];
  return object;
}