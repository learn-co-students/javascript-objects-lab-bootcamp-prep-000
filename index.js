function destructivelyDeleteFromObjectByKey(object,key){
  return delete object[key];
}

function deleteFromObjectByKey(object,key){
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key , value){
  object[key] = value;
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
  
}

var recipes = {}