var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign(object, {key:value});
  return object;
}

function updateObjectWithKeyAndValue(object, key, value){
  var ne = {};
  Object.assign(ne, object, {[key]:value});
  return ne;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
