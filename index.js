var recipes = {food: "amount"}

function updateObjectWithKeyAndValue(obj, key, value){
 var newObj = Object.assign( {}, obj, {[key]:value})
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  Object.assign(obj, {[key]:value})
  return obj
}
function deleteFromObjectByKey(obj, key){
var newObj =  Object.assign({}, obj) 
delete newObj[key]
return newObj
}
function destructivelyDeleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}