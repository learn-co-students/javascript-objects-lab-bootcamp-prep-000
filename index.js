var recipes = {};
//Created object called recipes

function updateObjectWithKeyAndValue(obj, key, value) {
return Object.assign({}, obj, {[key]: value})
//Non-destructively clones object and adds key and value
//Also works without the curly braces after the open parentheses
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
object[key] = value
return object
//Destructively updates object with Key and Value
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return object
  //Deletes key from a clone of object and returns new object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
  //Destructively deletes key from objectand returns object
}
