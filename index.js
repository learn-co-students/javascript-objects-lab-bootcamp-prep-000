var recipes = { Oxtail: 'gravy'};
function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {[key]:value})
  return newObj 
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){ 
  Object.assign(object, {[key]:value})
  return object
}  
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj.key
  return key
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}