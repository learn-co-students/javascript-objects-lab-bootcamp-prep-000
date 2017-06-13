var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign( {}, object, { [key]: value } )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var Object2 = Object.assign({}, object)
  delete Object2.key
  return Object2
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
