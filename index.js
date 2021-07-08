var recipes = {bread:"whole wheat"}

key = "meat"
value = "ham"

object = recipes

function updateObjectWithKeyAndValue(object,key,value) {
  return Object.assign({}, object, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}


key = 'bread'


function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({},object)
  delete newObj[key]
  return newObj
}


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}

