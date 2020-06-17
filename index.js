
var recipes = {'cake': 'chocolate'}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {[key]: value})
  return newObj
}

// console.log(updateObjectWithKeyAndValue(recipes, 'pie', 'apple'))
// console.log(recipes)


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

// console.log(destructivelyUpdateObjectWithKeyAndValue(recipes, 'pie', 'apple'))
// console.log(recipes)

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

console.log(deleteFromObjectByKey(recipes, 'cake'))
console.log(recipes)

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

// console.log(destructivelyDeleteFromObjectByKey(recipes, 'cake'))
// console.log(recipes)

