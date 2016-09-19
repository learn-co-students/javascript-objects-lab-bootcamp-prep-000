var recipes = {

};

function updateObjectWithKeyAndValue(object, key, value) {
    var recipes = object
    object[key] = value
    return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes = object
  object[key] = value
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  var recipes = Object.assign({}, object)
  delete recipes.key
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  recipes = object
  delete object[key]
  return recipes;
}
