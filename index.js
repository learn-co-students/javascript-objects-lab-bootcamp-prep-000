var recipes = {}

function updateObjectWithKeyAndValue(obj,key,value){
var newObj = Object.assign({},obj)
newObj[key]=value
return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key]=value
  return obj
}

function deleteFromObjectByKey(obj,key){
return delete obj.key
}

function destructivelyDeleteFromObjectByKey(obj,key){
return delete obj[key]
}
