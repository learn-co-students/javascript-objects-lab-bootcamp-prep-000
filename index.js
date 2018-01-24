var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  var new_object = Object.assign({}, object)
  return Object.assign(new_object, { [key] :value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object[key] = value
  return object
  
}

function deleteFromObjectByKey(object, key) {
  var new_object = Object.assign({}, object)
  return delete new_object[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
 return delete object[key]
}



