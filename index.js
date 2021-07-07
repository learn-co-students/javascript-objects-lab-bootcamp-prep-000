var recipes = {
  first: "eggs"
}

function updateObjectWithKeyAndValue(object, keey, value) {
  var obj2 = Object.assign(object, {[keey] : value})
  // var obj = { prop: 1 }
  // var obj2 = Object.assign(obj, object, {key: value})
  return obj2
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key)  {
  var newObj = Object.assign({}, object)
  delete newObj.key
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
