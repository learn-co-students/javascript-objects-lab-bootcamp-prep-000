let recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  let newObj = Object.assign({}, obj)
  newObj[key] = value;

  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj
}

function deleteFromObjectByKey(object, key) {
  let newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
