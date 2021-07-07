var recipes = {
}; 
var obj = { prop: 1 }
var newObj = Object.assign(obj, 'prop')
var newObj = destructivelyDeleteFromObjectByKey(obj, 'prop');

function updateObjectWithKeyAndValue(obj, key, value){ 
  return Object.assign({}, obj,{ [key]: value })
  }

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
    object[key] = value
    return object
}
function deleteFromObjectByKey(object,key){
  delete newObj['prop']
  return obj 
}
function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj['prop']
  return obj 
}