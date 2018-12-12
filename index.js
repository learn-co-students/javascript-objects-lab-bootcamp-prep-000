var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj = { key: 'value' };
  var newObj =  Object.assign({}, obj);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  object = {key: 'value'};
  delete object['key'];
  return object;
}