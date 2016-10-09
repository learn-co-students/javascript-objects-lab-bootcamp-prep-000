var recipes = {prop: 1, prop2: 2};

function updateObjectWithKeyAndValue(recipes, name, ingredient){
  return Object.assign({prop:1, prop2: 2}, {prop3: 3});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, name, ingredient){
  //obj[key] = value
  recipes.prop = 1;
  recipes.prop2 = 2;
  return recipes;
}



function deleteFromObjectByKey(recipes, name){

  return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, name){
  delete recipes["prop2"];
  return recipes;
}
