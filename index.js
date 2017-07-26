var recipes = {}

function updateObjectWithKeyAndValue(obj,key,value) {
  var new_obj = Object.assign({},obj)
  new_obj[key] = value
  return (new_obj)
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
  obj[key] = value
  return (obj)
}

function deleteFromObjectByKey(obj,key) {
  var new_obj = Object.assign({},obj)
  delete new_obj[key]
  return (new_obj)
}

function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj[key]
  return (obj)
}
