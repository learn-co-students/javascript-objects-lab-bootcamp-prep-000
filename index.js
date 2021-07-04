var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = { prop: 1 }
  return Object.assign({}, recipes, { prop2: 2 })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop', '1')
destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', '2')

function deleteFromObjectByKey(object, key) {
  var recipes = { prop: 1 }
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes.prop
  return newRecipes
 }
 
function destructivelyDeleteFromObjectByKey(object, key) {
   delete object[key]
   return object
   
}