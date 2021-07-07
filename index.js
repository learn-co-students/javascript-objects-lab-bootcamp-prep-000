var recipes = {
  
}
    
 function updateObjectWithKeyAndValue (object, key, value) {
   return Object.assign({}, object, {[key]: value})
 }


function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey (obj, key) {
  var objNew = Object.assign({}, obj)
  delete objNew[key]
  return objNew
}

function destructivelyDeleteFromObjectByKey (obj, key) {
  delete obj[key]
  return obj
}