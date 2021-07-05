var recipes = {};

function updateObjectWithKeyAndValue(recipes, dinner, meat){
  recipes[dinner] = meat
  return recipes
};

function updateObjectWithKeyAndValue(recipes, dinner, meat){
  return Object.assign({}, recipes, { [dinner]: meat })
};

function destructivelyUpdateObjectWithKeyAndValue(recipes, dinner, meat){
  recipes[dinner] = meat
  return recipes
};

function deleteFromObjectByKey(recipes, dinner, meat){
  return Object.assign({}, recipes, { [dinner]: meat })
};

function destructivelyDeleteFromObjectByKey(recipes, dinner, meat){
  recipes[dinner] = meat
  return recipes
};
