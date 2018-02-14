var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( {}, object, {[key]: value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
var del = Object.assign({}, recipes)

function deleteFromObjectByKey(object, key) {
  delete del[key]
  return del
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

