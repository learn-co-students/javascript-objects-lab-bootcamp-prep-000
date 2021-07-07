// 8 objectives:

//1. Define a recipes object

//var recipes = { meal: 'ingredients'}
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}

// function updateObjectWithKeyAndValue(object, key, value) {
//     Object.assign({key: value})
//     return object
//   }
// the original object values would appear with a {}  object = {}

var trueObject = object
function destructivelyDeleteFromObjectByKey(object, key) {
  object = ({}, delete object[key])     //same as delete object[key]
  return object
}

var newObj
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}
//obj[word]

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value     //last lesson (delete the original, replace the deleting with a value)
    return object
}
// function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
//   var newObj = object.key[value]
//   return newObj
// }
