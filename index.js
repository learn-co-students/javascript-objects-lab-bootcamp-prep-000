let recipes = { butter: '200 grams', sugar: '200 grams', eggs: 4 };

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

updateObjectWithKeyAndValue(recipes, 'cream', '100 mls');

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'sugar', '250 grams');

function deleteFromObjectByKey(object, key) {
  let newRecipes = Object.assign({}, recipes);
  delete recipes.sugar; 
  return newRecipes; 
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

destructivelyDeleteFromObjectByKey(recipes, sugar);


