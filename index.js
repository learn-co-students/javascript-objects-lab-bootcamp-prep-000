var recipes = {foo:'bar'};

function updateObjectWithKeyAndValue(recipes, foo, bar) {
  recipes[foo] = bar
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, bin, too) {
  recipes[bin] = too
  return recipes
}

function deleteFromObjectByKey(recipes, foo) {
  var newObj = Object.assign({}, recipes);
  delete newObj.foo;
  return newObj
}

function destructivelyDeleteFromObjectByKey(recipes, foo) {
  delete recipes["foo"]
  return recipes
}
