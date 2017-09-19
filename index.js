var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, {[key]: value})
      }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  //var object = {[key]: 'value'}
  object[key] = value
  return object }

function deleteFromObjectByKey(object, key) {
  //return delete object.key
  var object1 = delete object.key
  return object1
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
