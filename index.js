var recipes = {
  Eggs: "6",
  Chicken: "1",
  Oil: "150ml",
}

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign ({}, object, {[key] : value});
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}



function deleteFromObjectByKey(object, key) {
   var newRecipe = delete object.key
   return newRecipe
} //deletes key from value-pair non-destructively



function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key]
 return object
}










