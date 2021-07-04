var recipes = {flour:'1 cup'}
function updateObjectWithKeyAndValue(obj, key, value) {
 var object =  Object.assign({},obj,{[key]:value})
  return object
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var obj = delete object.key
  return obj
}
function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key]
  return object
}