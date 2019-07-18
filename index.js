let recipes = {
  "eggs": 2,
  "butter": "3 cups",
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key] : value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign({}, object)
  delete newObj.key
  return newObj
}

function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}