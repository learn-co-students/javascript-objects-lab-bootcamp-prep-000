var recipes = new Object(); //creates the recipe object

function updateObjectWithKeyAndValue(object, key, value) {
  //creates clone of passed object with added key/value pair
  var tempObject = object;
  tempObject[key] = value;
  return tempObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value; //adds key/value pair to passed object
  return object
}

function deleteFromObjectByKey(object, key) {
  //creates a clone of passed object without the deleted key/pair
  var tempObject = Object.assign({}, object);
  delete tempObject[key];
  return tempObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]; //deletes key/value pair from passed object
  return object
}
