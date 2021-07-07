var recipes = {Ingredient : 'item'}

function updateObjectWithKeyAndValue(object,key,value){
  
  //non destructivelyUpdateObjectWithKeyAndValue
   
  return Object.assign({},object,{[key]:value})
  
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  object[key] = value
  
  return object
  
}

function deleteFromObjectByKey(object,key){
  
  var obj = {obj:'key'}
  
  var newObject = Object.assign({},obj)
  
  delete newObject.object
  
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
  
  
  delete object[key];
  
  return object
  
}

