var recipes = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
updateObjectWithKeyAndValue(recipes, 'prop2', 2)

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2)

function deleteFromObjectByKey(object, key, value){
  return delete Object.assign({}, object, { [key]: value })
}
deleteFromObjectByKey(recipes, 'prop', 1)

function destructivelyDeleteFromObjectByKey(object, key, value){
  object[key] = value
  return delete object.key
}
destructivelyDeleteFromObjectByKey(recipes, 'prop', 1)

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
