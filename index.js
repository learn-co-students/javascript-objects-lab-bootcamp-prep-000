var recipes = new Object ( { key: "value"} );

function updateObjectWithKeyAndValue (recipes, key, value) {
  
  return Object.assign ( {}, recipes, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  
  recipes[key] = value
  return recipes;
}

function deleteFromObjectByKey (recipes, key) {

  var recipesNew = Object.assign ({}, 'key')
  delete recipesNew.key;
  return recipesNew;
}

function destructivelyDeleteFromObjectByKey (recipes, key) {
  

  
  // delete recipes.key; this is wrong, but why?
  
  delete recipes[key];
  return recipes;
}