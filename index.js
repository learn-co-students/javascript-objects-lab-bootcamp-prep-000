var recipes = { quiche: 'eggs' }

function updateObjectWithKeyAndValue (object, key, value){
//  return Object.assign({}, recipes, {pancakes: "flour"});
  return Object.assign ({}, recipes, {prop: 1});
}
updateObjectWithKeyAndValue ();
console.log(updateObjectWithKeyAndValue());
recipes;
console.log(recipes);

function destructivelyUpdateOjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, recipes, {pancakes: "flour"});
//  return delete recipes.quiche;
};
console.log(destructivelyUpdateOjectWithKeyAndValue());
function deleteFromObjectByKey (object, key){
  return delete recipes.quiche;
};
console.log(deleteFromObjectByKey());
