var recipes = {recipe: 'Ingredients1'};

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  var recipes2 = Object.assign({}, recipes);
  delete recipes2.key;
  return recipes2;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var recipes2 = Object.assign({}, recipes);
  delete object[key];
  return recipes;
}