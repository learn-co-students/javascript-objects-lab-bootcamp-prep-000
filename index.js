var recipes = Object.assign({})

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
  
}

function deleteFromObjectByKey(object, key) {
  var new1 = Object.assign({}, object)
  delete new1[key]
  return new1
}

 function destructivelyDeleteFromObjectByKey(object, key) {
   delete object[key]
   return object
 }