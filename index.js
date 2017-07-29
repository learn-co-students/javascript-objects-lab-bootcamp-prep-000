var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key){
  var temp = Object.assign({}, recipes);
  delete temp[key];
  return temp;

}

function destructivelyDeleteFromObjectByKey(recipes, key){
  if(delete recipes[key] == true){
    return recipes;
  }
}
