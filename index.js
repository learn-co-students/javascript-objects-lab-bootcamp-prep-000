var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key){
  delete recipes.key
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key
  return object 
}