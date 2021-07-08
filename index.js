var recipes = {}

  function updateObjectWithKeyAndValue(object, key, value) {
    var newObj= Object.assign({}, object, { [key]: value})
    return newObj
  }

  function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    //updates object with given key
    object[key] = value
    return object
  }

//non-destructive, delete key and return new object
  function deleteFromObjectByKey(object, key) {
  //  delete object[key]
    //return object

   var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}

//delete key and return object
  function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
  }
