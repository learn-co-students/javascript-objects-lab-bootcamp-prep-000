var recipes = {};
function updateObjectWithKeyAndValue(object,key,value)
{
   var newObj = Object.assign({[key]: value},object)
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
  
 obj[key]=value
 return obj
}
function deleteFromObjectByKey(obj,key)
{
  
  const newestObj = Object.assign({key},obj)
  delete newestObj[key]
  return newestObj
}
function destructivelyDeleteFromObjectByKey(obj,key)
{
  delete obj[key]
  return obj
}