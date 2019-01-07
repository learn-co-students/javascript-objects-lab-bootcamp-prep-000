var recipes = {
  toast: 1,
  egg: 2
}


function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({},recipes,{[key]: value});
}

updateObjectWithKeyAndValue(recipes, 'avocado', 1);

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
    recipes[key] = value;
    return recipes;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'butter', 'spread');


function deleteFromObjectByKey(recipes, key){
  var recipesNew = Object.assign({}, recipes);
  delete recipesNew[key];
  return recipesNew;
}

deleteFromObjectByKey(recipes, 'egg');



function destructivelyDeleteFromObjectByKey(recipes, key){
    delete recipes[key];
    return recipes;
}
deleteFromObjectByKey(recipes, 'egg');


