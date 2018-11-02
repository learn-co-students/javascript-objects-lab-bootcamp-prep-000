var recipes = new Object ({})
 var obj = { prop: 1 }
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},obj,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},object)
 newObj[key] = undefined
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
   object[key] = undefined
   return object
}
