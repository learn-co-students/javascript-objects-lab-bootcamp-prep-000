var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj = {prop: 1}, {prop2: 2})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
return obj
}

function deleteFromObjectByKey(obj, key) {
  delete obj.key
return obj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj.key
  return obj
}
