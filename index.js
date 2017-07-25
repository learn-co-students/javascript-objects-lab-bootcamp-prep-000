var recipes = { key:'value'};

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value });
  }

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
 return recipes;
}

function deleteFromObjectByKey(object, key){
delete recipes.key;
return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return recipes;
}
