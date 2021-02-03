function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({},object,{[key]:value})
  // Object.assign(object,{[key]:value})
  // return Object.assign(object,{[key]:value})
  // object = Object.assign(object,{[key]:value})
  // console.log(object)
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},object[key])
  delete newObj[key]
  return newObj
}

function  destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}