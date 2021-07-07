var recipes = {ingredients: "flour"};

function updateObjectWithKeyAndValue(recipes, additionalIngredient, sugar) {
  return Object.assign({}, recipes, { [additionalIngredient]: sugar })
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, moreIngredient, water){
  recipes[moreIngredient]=water;
  return recipes
} 

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}