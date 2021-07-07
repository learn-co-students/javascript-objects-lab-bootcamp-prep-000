const recipes={}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
  return recipes
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, { [key]: value})
}
function deleteFromObjectByKey(object, key){
  object
  var dhammapada = Object.assign({}, object, {[key]: 'irrelevant'})
  return delete dhammapada[key]
  return object
}
function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key]
}
