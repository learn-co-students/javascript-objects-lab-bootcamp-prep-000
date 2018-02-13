var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value){
  var tmp = new Object()
  tmp[key] = value
  return Object.assign({},object,tmp)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var tmp = Object.assign({},object)
  delete tmp[key]
  return tmp
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
