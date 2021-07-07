function updateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var Obj = Object.assign({}, object)
  delete Obj[key]
  return Obj

}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
var recipes = new Object({ breakfast: 'oatmeal' })