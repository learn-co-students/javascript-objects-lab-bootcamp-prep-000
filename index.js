var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
 }

function deleteFromObjectByKey(object, key) {
  var cloneobj = Object.assign({}, object);
  delete cloneobj[key];
  return cloneobj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}
