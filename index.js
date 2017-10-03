var recipes = {}

function updateObjectWithKeyAndValue(objecta, key, value) {
  return Object.assign({}, objecta , {[key]: value} )

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({} , object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
}
