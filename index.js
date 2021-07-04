var recipes = new Object({})
  

function updateObjectWithKeyAndValue (recipes, key, value){
  return Object.assign({},recipes,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value){
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(object,key){
  var temp = Object.assign({},recipes)
  
  delete temp.key
  
  return temp
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}