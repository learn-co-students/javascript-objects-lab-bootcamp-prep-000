let recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign({}, object)
  return delete newObj[key]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
