var recipes = {
};




function updateObjectWithKeyAndValue (recipes,prop,prop2){
  //recipes.prop1=["prop1"]
  return Object.assign({prop:1},{prop2:2});
  }

function destructivelyUpdateObjectWithKeyAndValue(recipes,prop,prop2){
  recipes.prop="1";
  recipes.prop2="2";
  return recipes;
}

function deleteFromObjectByKey(recipes, prop){
  var recipe = {prop:0};
  var newObj = Object.assign({prop},recipe);
  delete newObj.prop;
  return newObj;
}

function destructivelyDeleteFromObjectByKey (recipes, prop){
  delete recipes.prop;
  return recipes;
}