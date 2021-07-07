var recipes = {key: 'value'};


function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
//returns an object with the orignal key value pairs and the new key value pair
}


function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign({}, object, { [key]: value });
//it does not modifye original object, but rather returns a clone with the new data
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
//updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object:
}


function deleteFromObjectByKey(object, key) {
  var recipe = {key: 'value'};
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
  

   //deletes `key` from a clone of object and returns the new object (it is non-destructive):
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}