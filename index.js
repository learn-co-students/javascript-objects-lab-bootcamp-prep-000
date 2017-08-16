var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var temporary = Object.assign({},object)
  temporary[key]=value
  return temporary
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
return object
}

function deleteFromObjectByKey(object, key) {
  var temporary= Object.assign({},object)
  delete temporary[key]
  return temporary
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object

}
