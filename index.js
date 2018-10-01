var recipes = {key: 'value'}
function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var recipes2 = Object.assign({}, key)
  return recipes2
}
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key] 
  return object

}