var recipes = new Object({"cookie": "milk"})

// Function "updates" the object with a new key and value in addition to the original
// return: clone of original object
function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {[key]:value})
  return newObj
}

// Function updates the object with a new key and value in addition to the original
// Return: original object with new additions
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

// Function deletes the key from a clone of the object
// Return: the clone of the original object with deletion
function deleteFromObjectByKey(object, key){
  var newObj = new Object();
  newObj = Object.assign({}, object) // assigns "object" key/values to newObj
  delete newObj[key];
  return newObj
}

// Function deletes provided key and corresponding value
// Return: modified original object.
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
