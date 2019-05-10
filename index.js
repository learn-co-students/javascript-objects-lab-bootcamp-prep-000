var recipes= new Object({});

var obj = { prop:1 };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function deleteFromObjectByKey(object, key) {
  const NewObj = Object.assign({}, object)
  delete NewObj[key]
  return NewObj
}