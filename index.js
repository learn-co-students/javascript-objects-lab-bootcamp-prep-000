var object = {key:'value'}

function updateObjectWithKeyAndValue(object, key, value) {
  {[key]:'value'},
  return Object.assign({}, obj, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  obj[key]= value
  return obj
}

function deleteFromObjectByKey(object, key) {
  var obj = {key:'value'}
  delete object.key
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = {key:'value'}
  return object
}
