var recipes = new Object ({
  recipe: "typeOf"
});

function updateObjectWithKeyAndValue(recipes, recipe, typeOf) {
    return Object.assign({}, recipes, { [recipe]: typeOf })

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, recipe, typeOf) {
  recipes[recipe] = typeOf
  return recipes
}

function deleteFromObjectByKey(recipe, typeOf) {
  var newObject = Object.assign({}, typeOf)
  delete newObject.recipe
  return newObject
}

function destructivelyDeleteFromObjectByKey(recipes, recipe) {
  delete recipes[recipe]
  return recipes
}
