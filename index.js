var recipes = {
  
}

function updateObjectWithKeyAndValue(object, key, value){
  const clone = Object.assign({}, object);
  clone[key] = value;
  return clone;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  const clone = Object.assign({}, object);
  delete clone[key];
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}