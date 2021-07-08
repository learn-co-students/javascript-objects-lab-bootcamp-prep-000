var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return object = Object.assign({}, object,{[key]:value} )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object 
}

function deleteFromObjectByKey(object, key){
  var objectCopy = Object.assign({},object) // this creates a clone 
  delete objectCopy[key] // delets the 'key' from the clone
  return objectCopy // returns the clone
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}