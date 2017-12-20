var recipes = { eggs: 3, flour: "2 cups", milk: "1 cup" };

// function updateObjectWithKeyAndValue(object, key, value) {
//   object[key] = value
//
//   return object
// }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign( {}, object, {[key]: value} )

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value

    return object
}

function deleteFromObjectByKey(object, key) {
  // var newObj = Object.assign( {}, object)

  var newObj = object

  return delete newObj.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]

  return object
}
