var recipes = {
  flour: '1 cup',
  sugar: 'half cup',
  eggs: '3',
  chocolate: 'third cup'
};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
};

updateObjectWithKeyAndValue(recipes, 'pecans', 'half cup');

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
};

destructivelyUpdateObjectWithKeyAndValue(recipes, 'milk', '2 cups');

function deleteFromObjectByKey() {
  var newObj = Object.assign({}, recipes);
  delete newObj.flour
  return newObj
}

function destructivelyDeleteFromObjectByKey() {
  delete recipes.sugar
  return recipes
}
