var recipes = {egg: '2'}

function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign(recipes, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key, value){
  var clone = {}
  Object.assign(clone, object, {[key]: value})
  delete clone.key
  return clone
}

function destructivelyDeleteFromObjectByKey(object, key, value){
  delete object[key]
  
  return object
  
}