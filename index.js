var recipes = {};

function updateObjectWithKeyAndValue(object, prop ,value) {
  var object = Object.assign(object , {prop2: value});
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, prop, value) {
  object.prop2 = value;
  return object;
}

function deleteFromObjectByKey (object,key) {
  var object = Object.assign({}, object);
  delete object.key;
  return object;
}

function destructivelyDeleteFromObjectByKey(object,key) {
  delete object.key;
  return object
}
