var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
    recipes[key] = value
    return recipes
 }
 
 function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
 }
 
 function deleteFromObjectByKey(object, key) {
   var newObj = Object.assign({}, recipes)
   delete newObj.prop
   return newObj
  
 }
 
 
 function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
   
 }
 
 
 
 
 
 
 
 
 
 
 