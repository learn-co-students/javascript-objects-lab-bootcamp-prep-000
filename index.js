var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
//this function is taking a new key value pair and adding it into an empty target object without modifying the actual object that is a paramater of the function; also adding the object to the empty object
  return Object.assign ({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
//this function is changing the object in order to have the new key value pair added to the object and returning the new object that results in this change
  object[key] = value;
  return object
}

function deleteFromObjectByKey (object, key) {
//create a copy of the object and delete a key from that object without actually changing the original object
  let object2 = Object.assign ({}, object)
  delete object2[key]
  return object2
}

function destructivelyDeleteFromObjectByKey (object, key) {
//this function is able to delete the key from the object and return the modified and new version of the object
  delete object[key]
  return object
}