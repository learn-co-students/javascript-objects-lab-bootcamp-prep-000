var recipes = { foo:'bar' }

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var yOg = Object.assign({}, object)
  delete yOg.key
  return yOg
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object
}
