var recipes = {}
var obj
var object1
function updateObjectWithKeyAndValue(obj, key, value){
object1 = Object.assign({},obj,{[key]:value})
return object1
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
obj[key]=value
  return obj
}
function deleteFromObjectByKey(obj,key){
  var object2
  object2 = Object.assign({},obj)
  delete object2[key]
  return object2
}
function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}