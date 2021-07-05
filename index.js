/*  run test to see what it wants
create an object called recipes
use Object.assign to make a new object that has the original K-V pair, and the the new ones
*/

var recipes = {key: 'value'};

function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign({}, object, {[key] : value});
}

/* update the existing object and return the updated one.
*/
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  
    return object;
}

/* create a new object to store 

*/
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

/*

*/
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  
    return object;
}