var recipes = {};

 //update des 
function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value){
  recipes[key] = value
  return recipes
}

//update assign
function updateObjectWithKeyAndValue(object,key,value){
  
  return Object.assign({}, object,{[key]:value})
}

//delete in original
function destructivelyDeleteFromObjectByKey (object, key){
  delete object[key]
  return object
}

//delete new object
function deleteFromObjectByKey(object,key){
  var object = {key}
  var newObj = Object.assign({}, object)
  
  delete newObj[key]
  
  return newObj
  
}