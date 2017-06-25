// 1. Create object
var recipes = {}

// 2. Update object with key and value
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value } )
}

// 3. DESTRUCTIVE | Update object with key and value
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value })
}

// 4. Delete from object by key
function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

// 5. DESTRUCTIVE | Delete from object by key
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
