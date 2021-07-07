var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var my_obj = Object.assign({}, object)
  my_obj[key] = value
  return my_obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var my_obj = Object.assign({},Object)
  delete my_obj[key]
  return my_obj
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}