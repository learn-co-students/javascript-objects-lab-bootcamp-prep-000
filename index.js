var recipes = {}

var obj = { prop: 1 }
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]:value})

}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  const newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj[key]
  return obj
}
