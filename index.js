var recipes = new Object ({})

var Obj = { prop: 1, prop2: 2 };
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},Obj,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  delete object.key;
  return Obj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}