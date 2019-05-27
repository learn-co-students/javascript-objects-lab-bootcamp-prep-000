var recipes = {'Pancake' : ['Joffa', 'latifas', 'Flour']}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object)
  newObj[key] = value
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}