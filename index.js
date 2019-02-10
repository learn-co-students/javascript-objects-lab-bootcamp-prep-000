var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function updateObjectWithKeyAndValue(obj, key, val) {
  var object = Object.assign({}, obj)
  object[key] = val
  return object
}

function deleteFromObjectByKey(obj, key) {
  var object = Object.assign({}, obj)
  delete object[key];
  return object
}


function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj
}
