var recipes = { 
  mayo: '2/3 cups', 
  garlic: '2',
  lemon: '1 ts',
  salt: '1/4 ts'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
