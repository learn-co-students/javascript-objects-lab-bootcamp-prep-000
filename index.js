var recipes = new Object({keys:`0`})

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, object, {[key]:value}) //make sure to put [] around key
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key) {
  var clone=Object.assign({},object) //copying object into empty object
  delete clone[key] //deletes key from a clone of object
  return clone //returns new object 
}

function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key] //deletes key/value pair (destructive)
  return object
}