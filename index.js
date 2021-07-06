var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, key);
}
function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({},(object, 'prop2', 2));
  return  { prop: 1, prop2: 2 };
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 }
  var newObj = deleteFromObjectByKey(obj, 'prop')
  return  { prop: 1, prop2: 2 };
}
function deleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  var newObj = Object.assign({}, object)
    return obj,key;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
        return object;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}



/*
function deleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  var newObj = Object.assign({}, object)
    return obj;
}
    
  1) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
     ReferenceError: updateObjectWithKeyAndValue is not defined
*/