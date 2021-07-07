var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(recipes, object, {[key]: value})
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = {}
  Object.assign(newObj, object)
  return delete newObj[key]
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key]
}
