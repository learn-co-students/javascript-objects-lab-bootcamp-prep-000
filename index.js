var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newObj = {};
  Object.assign(newObj,object,{[key]:value})
  return newObj
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}

