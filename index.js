var recipes = {
  flour: 'cup',
  sugar: 'cups'
}
  function updateObjectWithKeyAndValue(recipes, flour, cup) {
    return Object.assign({}, recipes, {[flour]: cup})
  }
  function destructivelyUpdateObjectWithKeyAndValue(recipes, flour, cup) {
    recipes[flour] = cup
    return recipes
  }
  function deleteFromObjectByKey(recipes, flour, cup) {
    return Object.assign({}, recipes, {[flour]: cup})
    delete recipes.flour;
    return recipes
  }
  function destructivelyDeleteFromObjectByKey(recipes, flour) {
    delete recipes[flour];
    return recipes;
  }
