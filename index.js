var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key){
  var diction = Object.assign({},object)
  delete diction[key]
  return diction 
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}

