var recipes = {

}
function updateObjectWithKeyAndValue(object,key,value){
     return Object.assign({}, object,{[key]: value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newRecipe = Object.assign({}, object)
   newRecipe
   delete newRecipe[object]
   return newRecipe
}



function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
