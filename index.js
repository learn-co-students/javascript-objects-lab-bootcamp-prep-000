var recipes = { prop: 1 }

function deleteFromObjectByKey(obj, key) {
  let a = Object.assign({}, obj)
  delete a[key]
  return a
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj[key] = val
  return obj
}

function updateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign({}, obj, { [key]: val })
}
