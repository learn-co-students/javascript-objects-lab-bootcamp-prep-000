var recipes = {
  key: "value"
}

function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key){
  return delete object.key;
  return object
}

function destructivelyDeleteFromObjectByKey(object,key){
  return object[key] = value
}
