var recipes = {
breakfast: 'omelet',
lunch: 'sandwich',
dinner: 'entree'
}
function updateObjectWithKeyAndValue(object, key, value) {
return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
return Object.assign(object, {[key]: value})
}
function deleteFromObjectByKey(object, key) {
  return Object
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object
}