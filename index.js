var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( {}, object, { [key]: value } )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.prop2 = 2;
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object, key)
  return delete newObject[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
