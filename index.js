var recipes = {}

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object,key){
  var newObj = Object.assign({}, object)
  newObj[key] = undefined
  return newObj
}

function destructivelyDeleteFromObjectByKey(object,key){
  object[key] = undefined
  return object
}
