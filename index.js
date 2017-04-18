var recipes = { chicken: "2 thighs"};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value});
}
updateObjectWithKeyAndValue(recipes, 'sauce', '1 tomato');

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'dip', 'barbeque');

function deleteFromObjectByKey(object, key) {
  delete recipes.dip;
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
delete recipes.dip;
return recipes;
}
