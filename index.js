var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var foo = Object.assign(object, {[key]: value})
  return foo
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var foo = Object.assign(object)
  //delete foo[key]
  return foo
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
