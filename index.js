var recipes = {recipeKey:"recipeName"};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  return Object.assign(object,object,{[key]:value})
}

function deleteFromObjectByKey(object,key){
  var newObject =  Object.assign({},object,key)
  return newObject
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object.key
  return object
}
