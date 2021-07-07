var recipes = {
  eggs: '3',
  chocolate: '1 cup',
  oil: '3 tsp',
  flour: '2 cups'
};
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}