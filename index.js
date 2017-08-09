/*
var obj = { foo: 'bar' }

var newObj = Object.assign({}, obj)

newObj // { foo: 'bar' }

delete newObj.foo // true

newObj // {}

obj // { foo: 'bar' }
*/

var recipes = {}
var obj = { prop: 1 }

function updateObjectWithKeyAndValue({}, key, value) {
  recipes['prop'] = 1
  recipes['prop2'] = 2
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object

}

function deleteFromObjectByKey() {
  var newObj = Object.assign({}, recipes)
  delete newObj.prop
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
