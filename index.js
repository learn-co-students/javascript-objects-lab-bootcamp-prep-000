var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  if(!object.hasOwnProperty(key)) {
    //Object.assign({key: value}, object);
    object[key] = value;
  }
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
