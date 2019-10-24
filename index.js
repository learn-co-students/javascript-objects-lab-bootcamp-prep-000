var recipes = { foo: 'bar' }
var clone;

var updateObjectWithKeyAndValue = (object, key, value) => {
  var newObj = object;
  newObj[key] = value;
  return newObj;
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
}

var deleteFromObjectByKey = (object, key) => {
  var delObj = Object.assign({}, object);
  delete delObj[key];
  return {};
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key];
  return object;
}
