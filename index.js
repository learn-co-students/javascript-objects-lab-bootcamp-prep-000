var recipes = {};

// Add to Object 
 function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}
 function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

// Delete From Object
 function deleteFromObjectByKey(object, key){
  var newObj =  Object.assign({},object)
  delete newObj[key]
  return newObj
 }
 function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}