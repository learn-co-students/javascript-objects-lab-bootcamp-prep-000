var recipes = new Object ({})
var obj = { prop: 1 }
 
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key]=value
  return object
}
function deleteFromObjectByKey(object, key){
  return Object.assign({})
}
function destructivelyDeleteFromObjectByKey(object, key){
 var newObject = ({})
 delete object[key]
 return newObject
}