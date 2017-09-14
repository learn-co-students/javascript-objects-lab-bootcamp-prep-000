var recipes = {eggs:"2"}
function updateObjectWithKeyAndValue(object,key,value){
  object[key]=value
  return object
}
function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key]=value
  return obj
}
function deleteFromObjectByKey(obj,key){
  var obj = {key:'value'}
  var newObj = Object.assign({},obj)
  delete newObj.key
  return newObj
}
function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}
