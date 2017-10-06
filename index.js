var recipes = {}
function updateObjectWithKeyAndValue(recipes , prop , value){
  return Object.assign({}, recipes, { [prop]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, prop , value){
  recipes[prop] = value
  return recipes
}
function deleteFromObjectByKey(object , key){
  var newObj = recipes
  delete newObj.key
  return newObj
}
function destructivelyDeleteFromObjectByKey(object , key){
  delete object[key]
  return object
}
