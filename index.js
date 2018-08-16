var recipes = new Object()

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(Obj, key, value) {
  return Object.assign({}, Obj, { [key]: value })
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, delete object.key)
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key]
 var newObj= delete object.key
 return newObj
}