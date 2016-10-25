var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value

  return obj
}

function deleteFromObjectByKey(object, key){
  delete object.key

  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  return newObj
  delete newObj.object
  return newObj 
}
