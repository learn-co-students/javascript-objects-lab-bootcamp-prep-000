var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  //Object.assign(createObject, insertExistingObject, updateObjectWithNewInfo)
  var newRecipe = Object.assign({}, object, {[key]: value})
  return newRecipe
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  var newObject = delete object['key']
  /*  Notes for me from elsewhere: object.key and object[key] accomplish the same thing.
      However, object.key only works if the key name is hardwired ( I mean not happening dynamically since it cannot change at run-time). It also does not work when the key is a number instead of a string.

      In other words, object[key] is more versatile.

      One of the reasons we use object.key is because it is easier to type and it looks cooler.

      If you can write the direct name of the key and it is not a number you can use object.key

      If the key is not yet known when we write the code, then we must use object[key] but be careful, sometimes we need to wrap the key in quotes:
      object["key"] like when the key is not a variable.*/
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
