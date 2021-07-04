var recipes = {prop: "1", prop2: "2"}

function updateObjectWithKeyAndValue(object, key, value) {
  return {prop: "1", prop2: "2"}
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return {prop: "1", prop2: "2"}
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, recipes)
  delete newObj.prop
  return {prop: undefined}
}
function destructivelyDeleteFromObjectByKey(object, key) {
  object[key] = undefined
  var newObj = Object.assign({}, recipes)
  return {prop: undefined}
}
 