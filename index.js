var recipes = {}

function updateObjectWithKeyAndValue(object,key,value){
  var object = Object.assign({}, object, { [key]: value} )
  return object

}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)
  delete newObject[key]
  object = Object.assign({}, newObject)
  return object
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
