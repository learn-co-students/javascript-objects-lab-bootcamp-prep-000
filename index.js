var recipes = new Object({})

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  var obi = Object.assign({}, obj)
  delete obi[key]

  return obi
}

function destructivelyDeleteFromObjectByKey (obj, key) {
  delete obj[key]

  return obj
}
