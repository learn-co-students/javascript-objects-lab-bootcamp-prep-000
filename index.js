var recipes={}

function updateObjectWithKeyAndValue(object, key, value){
var newObj = Object.assign({}, object,{[key]: value})
 return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(newObj, key){
return delete newObj.key
  }
  
function destructivelyDeleteFromObjectByKey(object, key){
 return delete object[key]
}