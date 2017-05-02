var recipes = { sugar: '1 cup'};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value})
}

updateObjectWithKeyAndValue(recipes, 'chocolate chips', '1 cup')

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'flour', '2 cups');

function deleteFromObjectByKey(obj, key) {
  var newRecipe = Object.assign({}, obj, [key] )

  delete newRecipe.sugar

  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];

  return obj;
}

destructivelyDeleteFromObjectByKey(recipes, 'sugar')
