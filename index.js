var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var copyObject = Object.assign({}, object);
  copyObject[key] = value;
  return copyObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var copyObject = Object.assign({}, object);
  delete copyObject[key];
  return copyObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
