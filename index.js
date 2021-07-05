var recipes={}

function updateObjectWithKeyAndValue(){
var object={prop:1, prop2: 2}
return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key]=value
return object
}

function deleteFromObjectByKey (object, key){
Object.assign({}, object)
var objCopy= Object.assign ({}, object)
  delete object[key]
return object
}

function deleteFromObjectByKey (object, key){
var objCopy= Object.assign ({}, object)
  delete objCopy[key]
return objCopy
}


function destructivelyDeleteFromObjectByKey (object, key){
  delete object[key]
  return object
  }
