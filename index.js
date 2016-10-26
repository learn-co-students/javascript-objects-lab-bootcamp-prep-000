var recipes = {prop:1};

function updateObjectWithKeyAndValue(object,key,value) {
  var ph = Object.assign({}, recipes);
  ph[key] = value;
  return ph;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var ph = Object.assign({}, recipes);
  delete ph[key];
  return ph;
}

function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key];
  return object;
}
