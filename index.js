var recipes = {};

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({},object,{[key]:value})
  object;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  return Object.assign(object,{[key]:value});
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object;
}

function deleteFromObjectByKey (object, key) {
  var obj = object
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj;
}