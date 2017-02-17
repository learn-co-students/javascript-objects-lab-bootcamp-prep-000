var recipes = {
  prop: 1
};

function updateObjectWithKeyAndValue(obj, key, value) {
var obj = recipes
obj[key] = value
return obj
};

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}
function deleteFromObjectByKey(obj, key) {
  var obj = recipes
  delete obj.key
  return obj
}
function destructivelyDeleteFromObjectByKey(obj, key){
  obj[key]
delete obj.key
return obj
}
