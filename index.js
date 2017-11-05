var recipes = {};

function updateObjectWithKeyAndValue (obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
};
const obj = { prop: 1};
updateObjectWithKeyAndValue (obj, 'prop2', 2);

function destructivelyUpdateObjectWithKeyAndValue (obj, key, value) {
  obj[key] = value;
  return obj;
};

function deleteFromObjectByKey (object, key) {
  var newObj = Object.assign({}, obj);
  delete newObj.prop;
  return deleteFromObjectByKey;
};

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key];
  return object;
};
