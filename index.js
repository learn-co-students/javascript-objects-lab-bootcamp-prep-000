var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
  let tempObj = Object.assign({}, object)
  tempObj[key] = value
  return tempObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  let tempObj = Object.assign({}, object)
  delete tempObj[key]
  return tempObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}