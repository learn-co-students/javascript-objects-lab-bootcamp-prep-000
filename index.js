var recipes = {Eggs:'one'}

function updateObjectWithKeyAndValue(object, key, value) {
  var meals = {prop:'1', prop2:'2'}
return meals
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value

  return object
}

const meals = { prop: 3 }

function deleteFromObjectByKey(object,key) {
var food = { fruit: 'banana'};

  delete key.fruit
  return food
}



 function destructivelyDeleteFromObjectByKey(object,key) {
   delete object[key]
   return object
   }
