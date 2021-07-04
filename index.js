var recipes = {

}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newRec = Object.assign({}, object, key )
 delete newRec[key]
return newRec
}

function destructivelyDeleteFromObjectByKey(object, key){
  var newRec = Object.assign({}, object, key)
  delete object[key]
  return object


}
