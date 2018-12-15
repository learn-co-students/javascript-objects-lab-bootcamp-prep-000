var recipes = {david: "great cook", bill:"bad cook" }

function updateObjectWithKeyAndValue(object,key,value) {
  
  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object[key] = value
  
  return object

}
function deleteFromObjectByKey(object, key) {
  var object2 = Object.assign({},object)
  return Object.assign({},object2, delete object2[key])
}
  
  function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
  }