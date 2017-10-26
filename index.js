var recipes = {lettuce: "alot", eggs: "even more", salt: "a single grain"}

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Object.assign({}, obj, {[key]: value})
  return newObj

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, item ) {
  var newObje = Object.assign({}, object)
  delete newObje.item
  return newObje[item]
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object

}
