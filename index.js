var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
  }
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  value = {prop: 1, prop2: 2};
  return value;
  }
function deleteFromObjectByKey(object, key) {
    var clone = Object.assign({}, object, key)
    delete clone[key];
    return clone;
    }
function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key];
    return object;
    }
 
  