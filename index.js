var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return {}
}

function updateObjectWithKeyAndValue(object, key, value) {
  return ({}, recipes, { prop: '1', prop2: '2'})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return (recipes, { prop: '1', prop2: '2'})
}
function deleteFromObjectByKey(object, key) {
  return ({}, recipes)
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return {}
}
