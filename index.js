var recipes = {}
var updateObjectWithKeyAndValue = function(obj, key, value){
  return Object.assign({},obj,{ [key]:value })
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  object[key]=value
  return object
}

var deleteFromObjectByKey = function(object, key){
  var newobj = Object.assign({},object)
  delete newobj[key]
  return newobj
}

var destructivelyDeleteFromObjectByKey = function(object, key){
  delete object[key]
  return object
}