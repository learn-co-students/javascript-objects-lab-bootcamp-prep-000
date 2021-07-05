let recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  let recipe2 = Object.assign({}, object, {[key] : value})
  return recipe2
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  let recipe2 = (delete object.key)
  return recipe2
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}