// run test first ...
// no other error checking, etc

var recipes = new Object({});


// NON-destructive
//assuming a valid object is passed
function updateObjectWithKeyAndValue(object, key, value) {
  var myCopy = Object.assign({}, object);
  myCopy[key] = value;
  return myCopy;
}

function deleteFromObjectByKey(object, key) {
  var myCopy = Object.assign({}, object);
  delete myCopy[key];
  return myCopy;
}

// --------------------
// destructive
//
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value;
    return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
