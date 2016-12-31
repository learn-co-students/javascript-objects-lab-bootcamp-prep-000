var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var reserv = Object.assign({}, object);
  reserv[key] = value;
  return reserv;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var reserv = Object.assign({}, object);
  delete reserv[key];
  return reserv;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
