var recipes = {
  eggs: 1,
  beefstrips: '8 oz',
  darksoysauce: '1 tbsp',
  water: '1 cup'
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key]= value
  return recipes
}

function updateObjectWithKeyAndValue(recipes,prop2,value) {
return Object.assign({}, recipes, {prop2: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes,key) {
  delete recipes[key]
  return recipes
}

function deleteFromObjectByKey(recipes,key) {
  var newrecipes = Object.assign({}, recipes)
  delete newrecipes[key]
  return newrecipes
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key]
  return recipes 
}
