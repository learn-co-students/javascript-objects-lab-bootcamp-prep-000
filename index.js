var recipes = {};
var obj = {
  prop: 1,
  prop2: 2,
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({ prop2: 2 }, obj);
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

// Non-destructive
function deleteFromObjectByKey(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}


function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}