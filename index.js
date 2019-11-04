function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object);
  newObject[key] = value;
  return object, newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var deleteNewObj = Object.assign({}, Object);
  delete deleteNewObj[key];
  return deleteNewObj;
}

function destructivelyDeleteFromObjectByKey(Object, key){
  delete Object[key];
  return Object;
}






