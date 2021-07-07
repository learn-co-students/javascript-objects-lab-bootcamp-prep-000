var recipes = {}

function updateObjectWithKeyAndValue (recipe, prop2, ident){
  return Object.assign({}, recipe,{prop2:ident})
}

function destructivelyUpdateObjectWithKeyAndValue (recipe, prop2, ident) {
  return Object.assign(recipe,{prop2:ident})
}

function deleteFromObjectByKey (recipe, prop2) {
  var recip = Object.assign({}, recipe)
  return delete recip.prop2
}

function destructivelyDeleteFromObjectByKey (recipe, prop) {
  return delete recipe.prop
}