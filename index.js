var recipes = { baking : 'flour'}
function updateObjectWithKeyAndValue(recipes, baking, flour) {
  recipes[baking] = flour

  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, baking, flour) {
    recipes[baking] = flour

    return recipes
}

function deleteFromObjectByKey(recipes, baking) {
delete recipes.baking;

return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, baking, flour) {
  recipes[baking] = flour

  return recipes
}
