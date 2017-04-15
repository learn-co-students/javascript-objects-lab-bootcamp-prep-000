var recipes = new Object ();

function updateObjectWithKeyAndValue (object, key, value) {
var obj = { prop: 1 }
return Object.assign({}, obj, { [key]: value})
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
};

function deleteFromObjectByKey(object, key) {
  const newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
};

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
};
