var recipes = {}
function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {obj[key]= value
return obj
}
function updateObjectWithKeyAndValue(obj, key, value) {
 return Object.assign({}, obj, { [key]: value })
}
function deleteFromObjectByKey(obj, key) {
  var foo = Object.assign(obj)
  return foo
}
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]

  return obj
}
