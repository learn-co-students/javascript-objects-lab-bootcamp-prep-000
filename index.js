var recipes = {
  name : `potpie`
}

function updateObjectWithKeyAndValue(object, key, value){
  var n = Object.assign({}, object)
  n[key] = value
  return n
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var n = Object.assign({}, object)
  delete n[key]
  return n
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete  object[key]
  return object
}