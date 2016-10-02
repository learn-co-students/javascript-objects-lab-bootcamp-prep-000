var recipes = { item1:"dal",item2:"rice"}
var updateObjectWithKeyAndValue =function(obj,key,value) {
  return Object.assign({},obj,{[key]: value})
}
var destructivelyUpdateObjectWithKeyAndValue = function(obj,key,value) {
  obj[key] = value
  return obj
}
var deleteFromObjectByKey = function(obj,key,value) {

var newObj = Object.assign({},obj)
delete newObj[key]
return newObj
}

var destructivelyDeleteFromObjectByKey = function(obj,key,value) {
  delete obj[key]
  return obj
}
