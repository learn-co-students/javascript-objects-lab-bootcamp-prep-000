var recipes = {
  eggs: 3,
  flour: "1 cup"
}
// non-destructive way
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value})
}
//destructive way
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
// non-destructive way
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object) // clone
  delete newObj.key
  return newObj
}
//destructive way
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}
