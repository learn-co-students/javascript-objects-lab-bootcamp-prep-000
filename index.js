var recipes = {};

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, recipes, {prop: 1},  {prop2: 2});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var obj = { value: key }
  var newObj = Object.assign({}, obj)
  delete newObj.key
  return newObj
  return obj
}

function destructivelyDeleteFromObjectByKey (object, key) {
    delete object[key];
    return object;
  }