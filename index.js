var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
    var newObj = Object.assign({}, obj, {[key]: value})
    return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  obj = newObj
  return obj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}
