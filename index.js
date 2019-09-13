var recipes = { flour: 'white', sugar: 'brown', cream: 'buttercream'}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object)
  obj[key] = value
  
  return obj
}

function destructivelyUpdateObjectWithKeyAndValue(object,key, value) {
  object[key] = value
  
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, key, recipes)
  
  delete newObj[key]
  
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  
  return object
  
}

