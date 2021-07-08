function updateObjectWithKeyAndValue (obj, key, value){
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  var alteredObj = Object.assign({}, obj)
  delete alteredObj[key]
  return alteredObj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}