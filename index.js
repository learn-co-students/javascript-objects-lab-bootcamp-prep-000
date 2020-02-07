var recipes = new Object()

function updateObjectWithKeysAndValue(object, key, value){
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key,value){
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key){
  var objectToDel = Object.assign({},object)
  delete objectToDel[key]
  return objectToDel

}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
