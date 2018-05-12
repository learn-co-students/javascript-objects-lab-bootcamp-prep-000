var recipes = {}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, { key: value})
}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { prop: 1, prop2: 2})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
 return object
}
function deleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({})
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key){
  return Object.assign({})
}
function destructivelyDeleteFromObjectByKey(object, key){
   delete object[key]
   return object
}