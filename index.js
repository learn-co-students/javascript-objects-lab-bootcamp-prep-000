var recipes = {
  macaroniAndCheese: "Macaroni and Cheese",
  sandwich: "Peanut butter and jelly",
  coffee: "Cafe au lait",
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var object = Object.assign({}, object)
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
