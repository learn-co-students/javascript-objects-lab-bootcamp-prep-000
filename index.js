let recipes = { italian: "pasta"}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newObj = Object.assign ({}, recipes)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  Object.assign ({}, recipes)
  delete recipes[key]
  return recipes
}

