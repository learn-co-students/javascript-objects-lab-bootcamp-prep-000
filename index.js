var recipes = {prop: '1'};

function updateObjectWithKeyAndValue (object, key, value) {
  object = Object.assign(recipes, {[key]:value});
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

