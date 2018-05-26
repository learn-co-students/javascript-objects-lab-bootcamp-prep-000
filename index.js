//define new object
var recipes = {
  eggs: 2,
  flour: "1 cup",
  sugar: "1/2 cup"
};

function updateObjectWithKeyAndValue(object, key, value) {
  //assign existing object properties and new key:value pair to blank object
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  //add key:value pair to existing object
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  //copies existing object properties to new object
  var newObj = Object.assign({}, object);
  //deletes key:value pair from new object, but old object is left untouched
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  //delete key:value pair from existing object
  delete object[key];
  return object;
}