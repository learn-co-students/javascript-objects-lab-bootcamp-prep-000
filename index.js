var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
var Object1 = Object.assign({},object,{[key]:value})
return Object1
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key]= value
return object
}

function deleteFromObjectByKey(object, key){
var Object1 = Object.assign({},object)
delete Object1[key]
return Object1
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
