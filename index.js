var recipes = { recipes: 'foodItem'};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key){
  delete recipes
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
