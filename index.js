var recipes = {
  eggs: '3',
  milk: '1 cup',
  flour: '2 cups'
}


//non-destructively
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}


//destructively
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

//non-destructively
function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

//destructively
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
