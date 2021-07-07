var recipes = {
  prop: 1,
  milk: "1 cup",
  butter: "stick"
}

var newRecipes = Object.assign ({}, recipes)

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign( {}, recipes, {prop2: 2 } )
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign(recipes, {prop2: 2} )
}

function deleteFromObjectByKey(key, value) {
  delete recipes.prop
  return Object.assign({}, recipes)
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes.prop
  return Object.assign(recipes)
}