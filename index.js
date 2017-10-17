var recipes = {}
function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}
const recipe = { eggs: 3 }
destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

var meal = {random: "hello"}
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value})
}
function deleteFromObjectByKey(object, key){
  newObj = delete object.key
  return newObj
}
function deleteFromObjectByKey(object, key){
  var newObj =  Object.assign({}, object)
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
