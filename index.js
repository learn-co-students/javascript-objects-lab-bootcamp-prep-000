var recipes = {};

function updateObjectWithKeyAndValue(recipe,key,value){
  recipe[key] = value;
  return recipe;
}

function updateObjectWithKeyAndValue(recipe,key,value){
  return Object.assign({}, recipe, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(recipe,key,value){
    recipe[key] = value;
   return recipe;
}

function destructivelyDeleteFromObjectByKey(object,key){
   delete object[key];
   return object;
}

function deleteFromObjectByKey(object,key){
  return Object.assign({}, object, { key })
}


function deleteFromObjectByKey(object,key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}


