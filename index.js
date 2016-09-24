var recipes = {};


var updateObjectWithKeyAndValue = (object, key, value) => {
  var clone = Object.assign({},object);
  clone[key] = value;
  return clone;
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
}

var deleteFromObjectByKey = (object, key) => {
  var clone = Object.assign({},object);
  delete clone[key];
  return clone;
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key];
  return object;
}
