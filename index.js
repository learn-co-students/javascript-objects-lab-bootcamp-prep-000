var recipes = {
  breakfast: 'cereal',
  lunch:'sandwich',
  dinner:'pasta',
};

function updateObjectWithKeyAndValue(recipes, meal, type){
  return Object.assign({}, recipes, {[meal]:type});
}
updateObjectWithKeyAndValue(recipes, 'midnight snack', 'pie');
console.log(recipes);

function destructivelyUpdateObjectWithKeyAndValue(recipes, meal, type){
  recipes[meal] = type;
  return recipes;
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'brunch', 'lox');
console.log(recipes);
  
function deleteFromObjectByKey(object, key) {
  var obj = { prop:1 };
  var newObj = Object.assign({}, obj);
  delete newObj.prop;
  return newObj;
}

var obj = { 'prop':1};

function destructivelyDeleteFromObjectByKey(obj, prop){
  var newObj = delete obj.prop;
  return obj;
}

