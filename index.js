var recipes = { prop: 1 }

function updateObjectWithKeyAndValue(recipes, prop, one) {
  return Object.assign({}, recipes, { [prop]: one })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop, one) {
  recipes[prop] = one
  return recipes
}

function deleteFromObjectByKey(recipes, prop) {
  const newObj = Object.assign({}, recipes)

  delete newObj[prop]
  return newObj
}

function destructivelyDeleteFromObjectByKey(recipes, prop) {
  delete recipes[prop]
  return recipes
}
