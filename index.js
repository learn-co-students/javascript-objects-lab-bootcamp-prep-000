var recipes ={
  prop: 1
  
}
//corect
function updateObjectWithKeyAndValue(recipes, key, value){
    return Object.assign({}, recipes, {prop2: 2} )

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2){
  recipes[prop2] = 2;
  return recipes;
}

function deleteFromObjectByKey(recipes, prop2){
   var clone = Object.assign({}, recipes);
   delete clone[prop2];
   return clone;

}

function destructivelyDeleteFromObjectByKey(recipes, prop){
  delete recipes[prop];
  return recipes;
}