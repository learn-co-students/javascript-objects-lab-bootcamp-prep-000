var recipes = {}

function updateObjectWithKeyAndValue(myObject, key, value){
  
  var newObject = Object.assign({},myObject,{[key]:value})
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(myObject, key, value){
  
  Object.assign(myObject,{[key]:value})
  
  return myObject
}

function deleteFromObjectByKey(myObject, key){
  
  delete myObject.key
  return myObject
  
}

function deleteFromObjectByKey(myObject, key){
 var newNewObject= Object.assign({},myObject)
  delete newNewObject.key
  return newNewObject
}

function destructivelyDeleteFromObjectByKey(myObject, key){
  delete myObject[key]
  return myObject
}

function deleteFromObjectByKey(myObject,key){
  
  var newNewObject = Object.assign({},myObject)
  delete newNewObject[key]
  return newNewObject
  
  
}










