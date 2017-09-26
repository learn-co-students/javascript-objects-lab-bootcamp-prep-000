
var recipes = {}

function objects() {
  return Object.assign({}, recipes)
}

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
   obj[key] = value
   return obj
}

function deleteFromObjectByKey(obj, key){
  var obj = {}
  var newObj = Object.assign({}, obj)
  newObj
  delete newObj.key
  obj = newObj
  return obj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}
