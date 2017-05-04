var recipes={}

function updateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({}, object, { [key]: value })
}


function deleteFromObjectByKey(object,key){
  
return Object.assign({}, object)  
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
  return object
}