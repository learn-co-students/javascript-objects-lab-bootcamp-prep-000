var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
  //creates new object with updated data, doesn't change original "recipes" object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
  //changes original "recipes" object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
