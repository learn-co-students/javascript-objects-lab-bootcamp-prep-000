var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object, { [key]: value})
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  //make a clone of the object:
  var newObject = Object.assign({}, object)

  //delete the key in the clone
  delete newObject[key] //dot notation doesn't satisfy the requirements of this test for some reason

  //return the clone
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
