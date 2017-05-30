let recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]:value})
}
function deleteFromObjectByKey(object, key){
  let temp = Object.assign(object)
  delete temp.key
  return temp
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
