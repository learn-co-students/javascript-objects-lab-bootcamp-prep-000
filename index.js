var recipes = {
  'chocolate': 'snickers',
  'vanilla': 'ice cream',
  'meat': 'chicken',
  'carbs': 'rice'
};

function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj.object;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
