var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {[key]:value});

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;
   return object;
   }
   
function deleteFromObjectByKey(object, key) {
 var newRecipe =Object.assign({}, recipes, {key});
 delete newRecipe[key];
 return newRecipe;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
  
}