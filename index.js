var recipes = new Object({
  prop: "1",
  prop2: "2"
} )
function updateObjectWithKeyAndValue(object, key, value){
  var obj = ({},recipes, {[key]: value})
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  delete recipes.prop
  return recipes
}
function destructivelyDeleteFromObjectByKey(object, key){
 return delete object[key]
}
