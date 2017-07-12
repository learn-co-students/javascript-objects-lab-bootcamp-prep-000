var recipes ={
  Pizza : 'bread'
}
var obj = { prop : 1}
function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({},obj,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value
   return object
 }

 function deleteFromObjectByKey(object, key) {
   delete object.key;
  return obj
 }

 function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
