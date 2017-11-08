var recipes = {}

function updateObjectWithKeyAndValue(myObject, newKey, newValue) {
  return Object.assign({}, myObject, {[newKey]: newValue})
}

function destructivelyUpdateObjectWithKeyAndValue(myObject, newKey, newValue) {
  myObject[newKey] = newValue
  return myObject
}

function deleteFromObjectByKey(myObject, theKey) {
  var newObject = Object.assign({}, myObject)
  delete newObject[theKey]
  return newObject
}

function destructivelyDeleteFromObjectByKey(myObject, theKey) {
  delete myObject[theKey]
  return myObject
}
