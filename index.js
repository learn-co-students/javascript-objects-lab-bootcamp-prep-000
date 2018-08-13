var recipes={
  BBRibs: 'babies'
}

function updateObjectWithKeyAndValue(object,key,value){
var newObj = Object.assign({},object)
newObj[key]=value
return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
 object[key]=value
 return object
}
function deleteFromObjectByKey(object,key){
  return delete object.key
}
function destructivelyDeleteFromObjectByKey(object,key){
  var newObj= delete object[key]
  return newObj
}