function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object)
  newObj[key] = value
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  return delete newObj[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}