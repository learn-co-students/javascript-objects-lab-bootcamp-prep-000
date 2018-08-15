var recipes = {}
var newobject = {}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  newobject = Object.assign({},object)
  return newobject
}