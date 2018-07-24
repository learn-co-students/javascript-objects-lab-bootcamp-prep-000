var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var objCopy = Object.assign({}, object);
  objCopy[key] = value;
  return objCopy;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var objCopy = Object.assign({}, object);
  delete objCopy[key];
  return objCopy;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}