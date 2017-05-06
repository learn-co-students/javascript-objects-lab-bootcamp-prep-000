var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
   return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
var newObj = Object.assign({}, obj[key])
delete newObj[key]
return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
