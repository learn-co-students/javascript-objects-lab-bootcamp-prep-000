var recipes =  {}
function updateObjectWithKeyAndValue(){}
function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
   recipes[key] = value
   return recipes
}
function deleteFromObjectByKey(recipes, key){
  return Object.assign({}, recipes, { })
}
function deleteFromObjectByKey(object, key){
  return Object.assign({}, recipes, { delete :key })
}
function destructivelyDeleteFromObjectByKey(object, key){
   delete object[key]
   return object
}

