var recipes = {'egg':'omelette','bread':'toast'}

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({},object,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key]=value
  return object
}
function deleteFromObjectByKey(object,key) {
  var objectCopy = object
  delete objectCopy.key
  return objectCopy
}
function destructivelyDeleteFromObjectByKey(object,key) {
  delete object.key
  return object
}
