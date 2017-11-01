var recipes = {}

//returns an object with the orignal key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var temp = Object.assign({},object)
  delete temp[key]
  return temp
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
