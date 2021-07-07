function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var fresh = Object.assign({},object)
  delete fresh[key]
  return fresh
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
