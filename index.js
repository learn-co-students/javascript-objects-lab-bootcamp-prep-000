var recipes = new Object('Objects');

var obj = {prop: 1};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, obj, {['prop2']: 2});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, obj, 'prop');
  delete newObj['prop'];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
