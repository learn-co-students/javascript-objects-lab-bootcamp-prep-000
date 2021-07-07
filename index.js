var recipes = {typeof: 'recipe'}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}
updateObjectWithKeyAndValue(recipes, 'anothertypeof', 'anotherrecipe')

var recipes = {typeof: 'recipe'}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'anothertypeof', 'anotherrecipe')

var recipes = {typeof: 'recipe'}
function deleteFromObjectByKey(object, key){
  const newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}
deleteFromObjectByKey(recipes, 'typeof')

var recipes = {typeof: 'recipe'}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
destructivelyDeleteFromObjectByKey(recipes, 'typeof')