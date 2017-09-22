var recipes = {key:'value'};

function updateObjectWithKeyAndValue(recipes, key, value){
 return Object.assign({}, recipes, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value){
  recipes[key] = value
  return recipes;
}

function deleteFromObjectByKey(clone, key){
  var clone = Object.assign({},recipes)
  delete clone.key
  return clone;
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes;
}
