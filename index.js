var recipes = { eggs: '3' }

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = new Object()
  newObj = Object.assign({}, object, {[key]: value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

//destructivelyUpdateObjectWithKeyAndValue(recipes, "hello", "world")