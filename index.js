var recipes = { eggs: 3 }

function updateObjectWithKeyAndValue(recipes, key, value)
{
  return Object.assign({}, recipes, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value)
{
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key)
{
  var newrecipe = Object.assign({}, recipes)
  delete newrecipe[key]
  return newrecipe
}

function destructivelyDeleteFromObjectByKey(recipes, key)
{
  delete recipes[key]
  return recipes
}
