var recipes = {Object}
var updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign (object, {[key]:value})
}
var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key]=value
  return object
}
var deleteFromObjectByKey = (object, key) => {
  delete[key]
  return object
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
  delete[key]
  return object
}
