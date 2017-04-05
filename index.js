var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  const obj2 = Object.assign({}, object)
  delete obj2[key]
  return obj2
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
}
