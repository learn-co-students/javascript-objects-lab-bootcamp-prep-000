var recipes = {}

function updateObjectWithKeyAndValue(){
  var recipes = { prop: '1', prop2: '2'}
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop, prop2){
  recipes.prop = '1';
  recipes.prop2 = '2';
  return recipes;
}

function deleteFromObjectByKey(){
  var newrecipe = Object.assign({}, recipes, {prop:'1', prop2:'2'})
  delete recipes.prop;
  delete recipes.prop2;
  return recipes;
}

function destructivelyDeleteFromObjectByKey(){
  delete recipes.prop;
  delete recipes.prop2;
  return recipes;
}
