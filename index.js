var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  return Object.assign(delete object.key)
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return object = delete object[key];
}

/*var recipes = {}

//2
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
//3
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
//4
function deleteFromObjectByKey(object, key) {
  return Object.assign({}, delete object.key)
}
//5
function destructivelyDeleteFromObjectByKey(object, key) {
  return object = delete object.key
}
*/
