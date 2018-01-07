var recipes={};
function updateObjectWithKeyAndValue(object,key,value){
  return Objects.assign( {}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value
  return object
}
function deleteFromObjectByKey(object,key){
  const newObj = Object.assign({},object)
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
