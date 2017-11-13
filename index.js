var recipes = {};

// creates a function that clones another object, updates and returns both the
// clone with the update and the unchanged originals orignal object.
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({},obj, {[key]:value})
}

// creates a function that destructively updates an object with a new key/value pair

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

// creates a function that clones an object then deletes a key from that clone and returns
// the new object. This is a NON-destructive example

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj;
}

// creates a function that deletes a key from an object. This is a destructive operations

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
