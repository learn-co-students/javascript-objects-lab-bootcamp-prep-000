var recipes = new Object();

function updateObjectWithKeyAndValue(recipes,key,value) {
recipes[key] = value
return recipes
}
function updateObjectWithKeyAndValue(recipes,key,value) {
  return Object.assign({}, recipes, {[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(recipes,key,value) {
  return Object.assign(recipes, {[key]:value})
}
function destructivelyDeleteFromObjectByKey(recipes, key) {
return delete recipes[key]
}
function deleteFromObjectByKey(recipes,key){
  var newObj = Object.assign({},recipes)
  delete newObj[key]
  return newObj
}
