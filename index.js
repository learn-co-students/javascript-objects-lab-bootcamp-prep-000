var recipes = {
  
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(obj, key){
  var newObject = Object.assign({}, deleteFromObjectByKey);
  delete newObject.obj;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}