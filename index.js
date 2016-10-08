var recipes = []
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
function deleteFromObjectByKey(object, key){
  var huggles = Object.assign({},object)
  delete huggles[key]
  return huggles}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function updateObjectWithKeyAndValue(object, key, value){
  var huggles = Object.assign({},object)
  huggles[key] = value
  return huggles
}
