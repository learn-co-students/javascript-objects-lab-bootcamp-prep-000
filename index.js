var recipes = {};


function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object);
  newObject[key] = value;
  return newObject;
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}


function deleteFromObjectByKey(object, key){
  var newObject1 = Object.assign({}, key);
  delete newObject1.key;
  return newObject1;
}


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}


