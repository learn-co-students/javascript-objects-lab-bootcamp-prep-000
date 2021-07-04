var recipes = {key: 'value'};

function updateObjectWithKeyAndValue(recipes, key, value){
  //recipes[key] = value;
  return Object.assign({}, recipes, {[key]: value});
  
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
  
}

function deleteFromObjectByKey(recipes, key) {
  var newObject = {key1: 'value1'};
  Object.assign ({}, recipes);
  delete newObject.key;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key];
  return recipes;
}
  
  
