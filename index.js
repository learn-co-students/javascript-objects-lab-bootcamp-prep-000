var recipes = { meat: "chicken" }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}
updateObjectWithKeyAndValue(recipes, 'vegetable', 'broccoli')


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'myKey', 'myValue')


function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object, key)
  delete newObj[key]
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object 
}
var meals = { breakfast: "oatmeal", lunch: "turkey sandwich" }
destructivelyDeleteFromObjectByKey(meals, 'lunch')