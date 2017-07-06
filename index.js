var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object, {[key] : value});
  return newObject;
}
