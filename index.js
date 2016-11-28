var recipes = {}
function Objects(obj, key, value){
  obj[key] = value
  return obj
}
Objects(recipes)

function updateObjectWithKeyAndValue(obj,
key, value){
  return Object.assign({}, obj, {[key]:
  value})
}
updateObjectWithKeyAndValue(recipes)

function destructivelyUpdateObjectWithKeyAndValue(
  obj, key, value) {
    obj[key] = value
    return obj
  }
  destructivelyUpdateObjectWithKeyAndValue(recipes, "prop2", 2)


function deleteFromObjectByKey(obj, key, value){
  var newObj = Object.assign({}, obj)
  delete newObj.prop
  return newObj
}
deleteFromObjectByKey(recipes)

function destructivelyDeleteFromObjectByKey(recipes, prop){
  delete recipes.prop
  return recipes
}
