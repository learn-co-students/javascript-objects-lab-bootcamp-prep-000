var recipes = {
  flour: "500g",
  water: "1 cup",
  salt: "1 tsp",
  yeast: "2 tsp",
  oil: "1/4 cup"
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
