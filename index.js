var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var object1 = new Object();
  object1 = Object.assign({},object)
  delete object1[key]
  return object1
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
