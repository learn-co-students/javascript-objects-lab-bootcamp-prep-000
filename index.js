var recipes = {
  flour: "1 cup",
  oil: "1/2 cup",
  sugar: "3 cups"
}

function updateObjectWithKeyAndValue(object, key, value) {
  var myCreatedObj = {};
  myCreatedObj[key] = value;
  var newObj = Object.assign({}, object, myCreatedObj);
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object, key)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
