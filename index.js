var recipes = {
  Strawberry: 'ice cream',
  Peaches: 'cream',
  Blueberry: 'cobbler'
};

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]=value;
  return recipes
}

function deleteFromObjectByKey(recipes, key){
  var recipe1 = Object.assign({}, recipes);
  delete recipe1[key];
  return recipe1
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key];
  return recipes
}