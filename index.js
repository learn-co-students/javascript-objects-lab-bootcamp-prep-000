var recipes = {}

function updateObjectWithKeyAndValue(object,key,value) {
  var nobject = Object.assign({}, object, {[key]:value})
  return nobject
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  Object.assign(object,{[key]:value})
  return object
}

function deleteFromObjectByKey(object,key) {
  var nobject = Object.assign({},object)
  delete nobject[key]
  return nobject
}

function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key]
  return object
}

