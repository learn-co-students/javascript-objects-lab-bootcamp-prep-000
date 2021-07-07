var recipes = {
  water: '2 cups',
  eggs: 3,
};

function updateObjectWithKeyAndValue (object, key, value){
  return Object.assign ({},object,{[key]:value});
}
updateObjectWithKeyAndValue(recipes, 'oil','1 tablespoon');

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key]= value;
  return object;
}
destructivelyUpdateObjectWithKeyAndValue (recipes, 'sugar', '3 cups');

var newRecipes = Object.assign ({},{water:'2 cups'}, {eggs:3});


function deleteFromObjectByKey (object,key){
  delete newRecipes.water;
  return newRecipes;
}


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}


