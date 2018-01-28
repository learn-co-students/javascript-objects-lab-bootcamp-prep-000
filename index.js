var recipes = {key: 'value'};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {};
  obj[key] = value;
  return Object.assign({}, object, obj);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj = {key: 'value'};
  Object.assign({}, object, obj);
  delete obj.key;
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
