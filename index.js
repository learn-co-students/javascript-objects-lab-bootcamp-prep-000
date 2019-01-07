var recipes = {recipes:'object'}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign ({},obj,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
 obj [key]= value
 return obj
}
function deleteFromObjectByKey(object,key) {
  var newObj= Object.assign({},object)
  delete newObj.object
  return key
}
function destructivelyDeleteFromObjectByKey(object,key) {
  {delete object [key]}
  return object
}