var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
var obj = {prop : 1}
updateObjectWithKeyAndValue(obj, 'prop2', 2)
obj

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}
var obj = { prop : 1 }
destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', '2');

function deleteFromObjectByKey(object, key){
  var obj = { prop: 1 }
  var newObj = Object.assign({}, obj, 'prop')
  delete newObj[key]
  return newObj
  
}

function destructivelyDeleteFromObjectByKey(object, key){
   delete object[key]
   return object
}