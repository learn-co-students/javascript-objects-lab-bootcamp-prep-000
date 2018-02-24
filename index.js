var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    Object.assign(object, {[key]: value})
    return object
  }

  function deleteFromObjectByKey(object, key) {
    var cloneObject = {}
    Object.assign(cloneObject, object)
    delete cloneObject[key]
    return cloneObject
  }

  function destructivelyDeleteFromObjectByKey(object, key) {
    return delete object[key]
  }
