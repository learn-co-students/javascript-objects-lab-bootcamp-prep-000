var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var object = { prop: 1 }
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  var newObj = Object.assign({}, 'prop')
  return newObj
  delete newObj.prop
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  obj = Object.assign({}, 'prop')
  return obj
}
