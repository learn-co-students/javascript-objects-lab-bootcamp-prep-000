var recipes = {chcolate:'1 bar'}
//non-destructively adding value
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
//destructively update
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
//delete non-destructively
function deleteFromObjectByKey(object, key){
  var NewObject = Object.assign({}, object)
  delete NewObject.key
  return NewObject
}
//destructively delete
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}
