var recipes = {
  stir: "eggs",
  mix: "pancake mix + eggs",
  cook: "pancake mix",
}
  
  
  function updateObjectWithKeyAndValue(recipes, add, milk){
    return Object.assign({}, recipes, { [add]: milk});
  }
  
  function destructivelyUpdateObjectWithKeyAndValue(recipes, add, milk) {
    recipes[add] = milk
    return recipes;}
    
function deleteFromObjectByKey(recipes, cook) {
  var newObj = Object.assign({}, recipes)
  delete newObj[cook]
  return newObj; 
}

function destructivelyDeleteFromObjectByKey(recipes, cook) {
  delete recipes[cook]
  return recipes;
}