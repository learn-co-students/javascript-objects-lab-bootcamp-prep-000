let recipes = {eggs: 3}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

// function updateObjectWithKeyAndValue(object, key, value) {
//
// }

// function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
//   Object = new Object ({key: 'value'})
// }
//
// function deleteFromObjectByKey(object, key) {
//   delete
//   return object
// }

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
