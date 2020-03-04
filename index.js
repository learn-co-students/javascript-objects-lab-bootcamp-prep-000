var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key] : value})
}
 
 function deleteFromObjectByKey(object, key) {
   var arr1  = delete object.key;
   return arr1
 }
 
 function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
 }