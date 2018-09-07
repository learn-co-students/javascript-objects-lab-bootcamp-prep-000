var recipes = {} 
function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object [key] = value; 
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign ({}, object, {[key]: value})
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object [key]
}

function deleteFromObjectByKey(object, key) {
    var new1 = Object.assign ({}, object); 
    return delete new1.key  
}