var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
updateObjectWithKeyAndValue(recipes, 'prop2', 2) // {prop: 1}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2) // { prop: 1, prop2: 2 }

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key];
  return newObj;
}
deleteFromObjectByKey(recipes, 'prop') // { prop2: 2 }

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObj = delete object[key];
  return newObj;
}
destructivelyDeleteFromObjectByKey(recipes, 'prop') // true

/* // updateObjectWithKeyAndValue
var recipes = {prop: 1}
console.log(Object.assign({}, recipes, { ['prop2']: 2 })) // { prop: 1, prop2: 2 }
console.log(recipes) // { prop: 1 } */

/* // destructivelyUpdateObjectWithKeyAndValue
var recipes = {prop: 1};
recipes['prop2'] = 2
console.log(recipes) // { prop: 1, prop2: 2 } */

/* // deleteFromObjectByKey
var recipes = {prop: 1};
console.log(delete Object.assign({}, recipes, { ['prop']: 1 })) // true
console.log(recipes) // { prop: 1 } */

/* // destructivelyDeleteFromObjectByKey
var recipes = {prop: 1}; // recipes['prop'] = 1
console.log(delete recipes.prop)
console.log(recipes) // {} */
