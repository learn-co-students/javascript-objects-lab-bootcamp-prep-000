var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({prop:1}, {prop2:2})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
 object[prop] =1, object[prop2] = 2
}
function deleteFromObjectByKey(object, key) {
 
  var obj = Object.assign({}, object)
  return object[key]
  delete obj[key]
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}