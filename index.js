var recipes = { brunch: 'mimosa' }
 
 function updateObjectWithKeyAndValue(recipes, key, value){
   return Object.assign({}, recipes, { [key]: value })
 }
 
 function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
   recipes[key] = value
 
  return recipes
 }
 
 function deleteFromObjectByKey(recipes, key) {
   var recipes_deaux = Object.assign({}, recipes)
   delete recipes_deaux[key]
   return recipes_deaux
 }
 
 function destructivelyDeleteFromObjectByKey(recipes, key) {
    delete recipes[key]
    
    return recipes 
 }