var recipes = {

}

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign ( {}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey (object, key) {
  //deletes a key/value pair without removing it from the object
  //creates a new object which has the same key value pairs as the original using Object.assign, and then deletes the key/value pair.
  var newObj = Object.assign ({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey (object, key) {
  // returns object without the deleted key/value pair
  delete object [key]
  return object
}
