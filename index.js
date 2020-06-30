let recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}

function destructivelyDeleteFromObjectByKey(object, key){
object[key] = value
return object
}

function deleteFromObjectByKey(object, key){
  let newObj =  Object.assign({},object)
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value
return object
}
