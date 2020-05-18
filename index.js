var recipes = { prop: 1, prop2: 2};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
 
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  return Object.assign({}, [obj], 1);
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj.prop; 
  return obj;
}