var recipes = {
  butter: '5 lbs',
  sugar: '6 lbs',
  bacon: '1 bucket of lardons',
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value}) 
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  var newObject = delete object['key']
  return newObject 
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object 
}
