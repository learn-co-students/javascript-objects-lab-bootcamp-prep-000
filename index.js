var recipes = {};

function updateObjectWithKeyAndValue(recipes, soups, chickennoodle) {
 return Object.assign({}, recipes, { [soups]: chickennoodle })
;}

function destructivelyUpdateObjectWithKeyAndValue(recipes, stews, beef) {recipes[stews] = beef;
  return recipes
;}

function deleteFromObjectByKey(recipe, soups){
delete recipes.soups;
return recipes
;}

function destructivelyDeleteFromObjectByKey(recipes, stews){
delete recipes[stews];
return recipes
;}