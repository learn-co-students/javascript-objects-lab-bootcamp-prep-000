var recipes = new Object({});


function updateObjectWithKeyAndValue(object, key, value){
 var newObj = Object.assign({[key]: value},object)

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
