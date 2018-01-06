var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({},object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue (object, hello, value) {
  object[hello]=value
  return object
}

function deleteFromObjectByKey (object, hello) {
  var newObj = Object.assign({}, object)
  delete newObj[hello]
  return newObj
}
