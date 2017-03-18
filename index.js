var recipes = {"Floor": "4 cups", "Baking Powder": "3 tsp", "Salt": "2 tsp", "Water": "2 cups"};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var objectCopy = Object.assign({}, object)
  delete objectCopy[key]
  return objectCopy
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}