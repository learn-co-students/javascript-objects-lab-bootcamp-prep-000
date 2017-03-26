var recipes = {
  Chicken: "Parm",
  Steak: "Frites"
}

function updateObjectWithKeyAndValue(object, key, value) {
  //return a clone of the object by adding a key and value in a non-destructive way
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  //update the object with a key and value in a destructive way
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  //delete key from clone of object and return the new object in a non destructive way
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  //delete key from object and return object in destructive way
  delete object[key]
  return object
}
