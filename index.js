var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  var obj = {'prop': 1 }
  return Object.assign({}, obj, {[key]: value})
}
updateObjectWithKeyAndValue(obj, 'prop2', 2)

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)

function deleteFromObjectByKey(obj, key) {
  var obj = {'prop': 1 }
  var newObj = Object.assign({}, obj)
  delete newObj.prop
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj['prop']
  return obj
}
const obj = {'prop': 1}
destructivelyDeleteFromObjectByKey(obj, 'prop')
