var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
  var newobj = Object.assign({}, object)
  newobj[key] = value
  return newobj
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}


function deleteFromObjectByKey (object, key) {
  var newObj = Object.assign({}, key)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key]
  return object
}
