var recipes = {}
function updateObjectWithKeyAndValue(obj, key, value){
  var obj = {key: "value"}
  return obj
}
function updateObjectWithKeyAndValue(obj, key1, value1){
    var newObj = Object.assign({}, obj, {[key1]: value1})
    return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}
function deleteFromObjectByKey(obj, key){
  delete obj.key
  return obj
}
function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign ({}, key)
  delete newObj.key
  return newObj
}
function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}
