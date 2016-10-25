var recipes = {};

var obj = {prop: 1}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}




var obj = {prop: 1}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

var obj = {prop: 1}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj
}
