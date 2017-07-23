var recipes = {'cookies': ['chocolate chips','milk','sugar','flour']}

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object)
  newObject[key] = value
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key){
  var newObj = Object.assign({},object)
  delete newObj[key]
  return newObj
}

  // 3) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
