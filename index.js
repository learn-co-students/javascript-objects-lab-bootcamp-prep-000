var recipes = {
  
}
function updateObjectWithKeyAndValue(object,key,value) {
    var clone = Object.assign({},object)
  clone[key] = [ ]
  clone[key] = value
  return clone
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key]
  return object
}
function deleteFromObjectByKey(object,key) {
  var cloneOfObj = Object.assign({},object)
  delete cloneOfObj[key]
  return cloneOfObj
}