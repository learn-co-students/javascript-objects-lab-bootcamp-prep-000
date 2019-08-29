var recipes = new Object({});

function updateObjectWithKeyAndValue (origObject, key, value) {
  var newObject = Object.assign({}, origObject);
  newObject[key] = value;
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue (origObject, key, value) {
  origObject[key] = value;
  return origObject;
}

function deleteFromObjectByKey(origObj, key) {
  var newObject = Object.assign({}, origObj);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey (origObj, key) {
  delete origObj[key];
  return origObj;
}