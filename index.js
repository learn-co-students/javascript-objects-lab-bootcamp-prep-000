var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var temp = Object.assign({}, object)
  var keyToDelete = key;
  delete temp[keyToDelete];
  return temp;
}

// Why does delete object.key NOT work?  I know it has to do with interpolating
// the input key into a string to be a "key," but WHY?

function destructivelyDeleteFromObjectByKey(object, key) {
  var keyToDelete = key;
  delete object[keyToDelete];
  return object;
}


