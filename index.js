var recipes = {

}

function updateObjectWithKeyAndValue(object, key, value) {
  var object = Object.assign({}, object, {[key]: value})
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

// function deleteFromObjectByKey(object, key) {
//   var object2 = delete object [key]
//   return object2
// }


  function deleteFromObjectByKey(object, key) {
    var object2 = Object.assign({}, object);
    var object3 = delete object2[key]
    return object3
  }

function destructivelyDeleteFromObjectByKey(object, key) {
  object = delete object[key]
  return object
}
