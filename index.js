var recipes = {
  'Mac N Cheese': 'Mac, Sharp Cheddar',
  Salad: 'Lettuce, Veggies, Dressing'
}

var recipes2 ={
  prop: 1,
}

function updateObjectWithKeyAndValue() {
  return Object.assign({}, recipes2, {['prop2']: 2})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey() {
  var recipesUpdate = Object.assign ({}, recipes)
  delete recipesUpdate.Salad
  return recipesUpdate
}

function destructivelyDeleteFromObjectByKey() {
  delete recipes.Salad
  return recipes
}