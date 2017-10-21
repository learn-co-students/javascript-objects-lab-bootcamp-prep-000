var recipes = { prop : '', prop2 : ''}

function updateObjectWithKeyAndValue(obj,key,value) {
    return Object.assign({},obj,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj,key) {
  var obj1 = Object.assign({},obj)
  delete obj1[key]
  return obj1
}

function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj[key]
  return obj
}
