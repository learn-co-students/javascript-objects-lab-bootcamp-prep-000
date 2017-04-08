var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj

}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj

}
function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object)

}
function destructivelyDeleteFromObjectByKey(object, key) {
  return Object.assign(object)
  
}
