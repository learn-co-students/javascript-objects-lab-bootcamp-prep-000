/*global describe, it */

// 1 - define recipes object

var recipes = new Object ({pizza: 'sauce'});

// 2 - update object non destructively with a key and a value

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

// 3 - destructively update object with a key and a value

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
// 4 - non destructively delete key from a clone of object & return new object

function deleteFromObjectByKey(object, key){
  var object2 = object;
  delete object2.key;
  return object2;
}
// 5 - destructively delete from object by key - deletes key from object and returns object

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
