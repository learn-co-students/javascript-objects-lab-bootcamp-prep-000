var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value});

  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
}

function deleteFromObjectByKey(object, key) {
 delete key.value;

 return recipes;

}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;

  return recipes;
}
