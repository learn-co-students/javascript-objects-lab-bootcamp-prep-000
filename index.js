var recipes={};

function updateObjectWithKeyAndValue(object, kye, value){
  return Object.assign({}, object, {kye: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
function deleteFromObjectByKey(object, key){
  return Object.assign({}, object, delete object.key)
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}