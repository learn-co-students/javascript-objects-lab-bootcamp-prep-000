var recipes = new Object({key: 'value'})

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key, value) {
  Object.assign({}, obj, {[key]: value });
  delete recipes['key'];
  return recipes;
}

function destructivelyDeleteFromObjectByKey(obj, key, value) {
  delete obj[key];
  return obj
}
