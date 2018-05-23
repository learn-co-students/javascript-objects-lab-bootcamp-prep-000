var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object,key){
  var newobj = {};
  Object.assign(newobj, object);
  delete newobj[key];
  return newobj;
}

function updateObjectWithKeyAndValue(object, key, value){
  var newobj = {};
  Object.assign(newobj, object);
  newobj[key] = value;
  return newobj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
