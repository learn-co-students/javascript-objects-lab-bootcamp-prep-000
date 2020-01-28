var obj2 = {}
function updateObjectWithKeyAndValue(object, key, value){
  obj2 = Object.assign({}, object)
  obj2[key] = value
  return obj2
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  obj2 = Object.assign({}, object)
  delete obj2[key]
  return obj2
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}