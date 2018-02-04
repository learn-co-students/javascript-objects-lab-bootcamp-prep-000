var recipes = new Object ({});

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  Object.assign(object, {[key]: value})
  return object
}
function deleteFromObjectByKey(object, key){
  return delete Object.assign({},object)[key]
  
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}