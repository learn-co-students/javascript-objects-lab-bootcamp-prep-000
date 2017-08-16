var recipes = new Object()

function Objects() {
  return recipes
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

var obj = { prop: 1 }
updateObjectWithKeyAndValue(obj, 'prop2', 2)

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return obj
}

var obj = { prop: 1 }
destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)

function deleteFromObjectByKey(object, key) {
  var obj = { foo: 'bar' }
  var newObj = Object.assign({}, obj)
  delete newObj.foo
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
   delete object[key]
   return object
 }
