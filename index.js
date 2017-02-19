var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

updateObjectWithKeyAndValue(recipes, 'eggs', '3');

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'flour', '1 cup')

function deleteFromObjectByKey(object, key) {
  object = Object.assign({})
  return object
}

deleteFromObjectByKey(recipes, 'flour');

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}

destructivelyDeleteFromObjectByKey(recipes, "flour");
