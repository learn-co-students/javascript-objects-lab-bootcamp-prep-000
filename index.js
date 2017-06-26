var recipes = { food: "ingredients" }

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]:value })
}

function deleteFromObjectByKey(obj, key) {
  var clone = Object.assign({}, obj)
  delete clone[key]
  return clone
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
