var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var modObject = Object.assign({}, object);
  delete modObject[key];
  return modObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
