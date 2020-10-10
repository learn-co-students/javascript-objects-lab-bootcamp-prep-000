function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  let obj =  Object.assign({}, object);
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object;
}
