var recipes = {
}
var objec = {prop:1}
function updateObjectWithKeyAndValue(object,key,value){
  
  return Object.assign(recipes,objec, {[key]:value}) 
  
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
 
 object[key] = value
return object
}

function deleteFromObjectByKey(object, key){
const newobjec = Object.assign({},object)
 delete newobjec[key]
 return newobjec
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}