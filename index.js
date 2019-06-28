var recipes = {milk:'100ml', tea:'1bag', water:'200ml'}

function updateObjectWithKeyAndValue(drink, ingredient, qty){
 return Object.assign({}, drink, {[ingredient]: qty})
}

function destructivelyUpdateObjectWithKeyAndValue(drink, ingredient, qty){
  drink[ingredient] = qty
  return drink
}

function deleteFromObjectByKey(drink, ingredient){
  var newDrink = Object.assign({}, drink)
  return delete newDrink[ingredient]
}

function destructivelyDeleteFromObjectByKey(drink, ingredient){
  return delete drink[ingredient]
}
