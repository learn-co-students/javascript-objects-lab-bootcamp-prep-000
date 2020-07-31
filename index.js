const recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value)  {
    recipes = {prop: 1};
    var newobj = Object.assign({}, recipes, {prop2: 2});
    return obj;
   }
   
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes = {prop: 1};
  recipes.prop2 = 2;
  return recipes;
}

function deleteFromObjectByKey(object, key){
  var recipes = {prop: 1}
  var newObj = Object.assign({}, recipes)
  delete newObj.prop
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes = {prop: 1};
  delete recipes.prop;
  return recipes;
}







