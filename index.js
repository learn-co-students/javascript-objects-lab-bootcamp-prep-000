const recipes = {
  
};

function updateObjectWithKeyAndValue (object, key, value) {
  Object.assign({}, object)[key] = value
  return object.key
}

function destructivelyUpdateObjectWithKeyAndValue (object,key,value) {
  object[key] = value
  return object
}


function deleteFromObjectByKey (object, key) {
  let newObject = delete Object.assign({}, object).key
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
