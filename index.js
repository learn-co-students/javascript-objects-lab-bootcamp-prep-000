var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({[key]:value}, object)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key){
var cloneObj = Object.assign({}, delete object.key)

return cloneObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
delete object[key]
 return object


}
