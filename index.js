var recipes = {
  flour: "4 cups",
  sugar: "3 cups",
  butter: "2 cups",
  milk: "1 cup",
  eggs: "6",
  vanillaExtract: "2 tsp"
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}
function deleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
function deleteFromObjectByKey(object, key, value) {
  var obj = { key: value };
  var newObj = Object.assign({}, obj);
  return delete newObj.key
}
function destructivelyDeleteFromObjectByKey(object, key, value) {
  var obj = {key: value};
  var delKey = delete object[key];
  return obj
}
