var recipes = {};



function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

var object = {prop:1}

destructivelyUpdateObjectWithKeyAndValue(object, 'prop2', 2)
object


function deleteFromObjectByKey(object, key){
  delete object.key
  return object
}

var object = {prop:1}

var newobject = deleteFromObjectByKey(object, 'prop')
object



function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}




function destructivelyDeleteFromObjectByKey(object, key){
  var newObject = delete object.key
  return newObject
}




function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}