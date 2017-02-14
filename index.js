var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
 recipes[key] = value
 return recipes
}

function deleteFromObjectByKey(recipes, key, value) {
  var newObj = Object.assign({}, recipes)

  delete newObj[key]

  return newObj
}

function destructivelyDeleteFromObjectByKey(recipes, key, value) {
  delete recipes[key]
  
  return recipes
}
