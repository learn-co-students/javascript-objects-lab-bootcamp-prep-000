var recipes = {

};

function updateObjectWithKeyAndValue (recipe, key, value) {
  return Object.assign({}, recipe, { [key]: value })
};

function destructivelyUpdateObjectWithKeyAndValue(recipe, key, value){
  recipe[key] = value
  return recipe
};

function deleteFromObjectByKey (recipes, key) {
  delete recipes.key;
  return recipes;
};

function destructivelyDeleteFromObjectByKey (recipes, key) {
delete recipes["key"];
return recipes;
};
