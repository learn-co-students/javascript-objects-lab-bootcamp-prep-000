var recipes = {}
function updateObjectWithKeyAndValue(Object, key, value) {
  return Object.assign({}, object, { [key]: value })
  
}
function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign({}, object, {[key]: value })
  return clone
}
function destructvelyUpdateObjectWithKeyAndValue(object,key,value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  
  let res = Object.assign({}, object)
  delete res[key]
  return res

}
function destructvelyDeleteObjectWithKeyAndValue(object, key) {
  delete Object.assign( obj[key])
  return object
  
}
