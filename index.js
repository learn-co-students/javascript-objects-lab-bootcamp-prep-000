var recipes = {};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})
}

function deleteFromObjectByKey(object, key){
  var newO =  Object.assign({},object);
  delete newO[key];
  return newO;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
