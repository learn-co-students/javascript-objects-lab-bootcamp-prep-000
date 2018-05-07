var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newObject =  Object.assign({}, object, { [key]: value })
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key] = value 
 return object
}
   
function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object, key)
  newObject = delete newObject.key
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key){
  object = delete object[key]
  return object
}

