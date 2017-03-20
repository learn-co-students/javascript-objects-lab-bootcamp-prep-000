var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
      return Object.assign({}, object, { [key]: value });
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
      object[key] = value;
      return object;
}
function deleteFromObjectByKey(object, key) {
      var objectTwo = [...object];
      delete objectTwo[key];
      return objectTwo;
}
function destructivelyDeleteFromObjectByKey(object, key) {
      delete object[key];
      return object;
}
