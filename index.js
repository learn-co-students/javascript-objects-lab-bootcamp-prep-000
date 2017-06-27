var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) { //non-destructive way to make clone of and update object
  return Object.assign({}, object, { [key]:value} );
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) { //destructive way to update object
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) { //non-destructively deletes key from object
  var newObj = Object.assign({}, object);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) { //destructively deletes key from object
  delete object.key;
  return object;
}
