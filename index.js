var recipes = {}

function updateObjectWithKeyAndValue(objekt, key, value) {
  var nov={}
  Object.assign(nov, objekt, {[key]: value})
  return nov
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value
  return object
}
function deleteFromObjectByKey(object, key) {
  var novobjekt = new Object()
  Object.assign(novobjekt, object)
  delete novobjekt[key]
  return novobjekt
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
