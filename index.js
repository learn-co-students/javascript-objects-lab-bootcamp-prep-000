



var recipes = {

}


function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object)
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
