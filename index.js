var recipes = {flour: '3 cups'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var foo = key
  var newObj = Object.assign({}, object)
  delete newObj[foo]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var foo = key
  var newObj = Object.assign(object)
  delete newObj[foo]
  return object
}
