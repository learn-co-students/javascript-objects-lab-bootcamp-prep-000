var recipes = {};

updateObjectWithKeyAndValue(recipes, "key1", "value1")
destructivelyUpdateObjectWithKeyAndValue(recipes, "key2", "value2")
deleteFromObjectByKey(recipes, "key3")
destructivelyDeleteFromObjectByKey(recipes, "key4")

function updateObjectWithKeyAndValue(object, key, value){
var obj = Object.assign({},object,{[key]:value})
console.log({[key]:value});
return obj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key] = value;
return object;
}
function deleteFromObjectByKey(object, key){
  var obj = Object.assign({},object)
  delete obj[key];
  return obj;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
