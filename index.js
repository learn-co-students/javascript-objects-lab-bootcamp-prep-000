var recipes = new Object({ cookie: "chocolate chip", sugar: "2 cups" })

function updateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}
const recipe = { eggs: 3 }

updateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
destructivelyUpdateObjectWithKeyAndValue (recipe, 'butter', '1 cup')

function deleteFromObjectByKey(object, key) {
  var recipe = { salt: "1 teaspoon" }
  var newRecipe = Object.assign({}, recipe)
    delete newRecipe.salt
  return newRecipe
}
deleteFromObjectByKey()

function destructivelyDeleteFromObjectByKey(object, key) {
    return delete object[key]
}
