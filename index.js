var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]:value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var nobj = Object.assign({}, object)
  delete nobj[key]
  return nobj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
