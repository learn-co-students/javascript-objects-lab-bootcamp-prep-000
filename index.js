var recipes = {key: "value"}

function updateObjectWithKeyAndValue (recipes, key, value) {
  var obj = Object.assign({}, recipes, {[key]:value})
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value
  return recipes
}
function deleteFromObjectByKey (recipes, key) {
  var obj = Object.assign({}, recipes)
  delete obj[key]
  return obj
}

function destructivelyDeleteFromObjectByKey (recipes, key) {
  delete recipes[key]
  return recipes
}
