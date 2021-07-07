var recipes = {
  "Ice": "4 cubes",
  "Jameson": "2 shots",
  "Coke": "16oz"
}

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
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
