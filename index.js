var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(recipes, object, { [key]: value })
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  Object.assign(object, { [key]: value })
  return object;
}

function deleteFromObjectByKey (object, key) {
  Object.assign(recipes, object)
  delete recipes[key]
  return recipes
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key]
  return object
}
