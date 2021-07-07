var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newthing = Object.assign({}, object);
  newthing[key] = value;
  return newthing;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newthing = Object.assign({}, object);
  delete newthing[key];
  return newthing;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}