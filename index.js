var recipes = {Pizza:["Dough","Tomatoes","Cheese","Basil"]
};

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes , {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key) {
  const newObj = Object.assign({}, recipes);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key];
  return recipes;
}