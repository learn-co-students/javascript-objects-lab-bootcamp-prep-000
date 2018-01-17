var recipes = { ice: "1 large cube", whiskey: "2 parts", vermouth: "1 part", bitters: "2 dashes", cherries: "2 or 3" };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var simpleRecipe = Object.assign({}, object);
  delete simpleRecipe[key];
  return simpleRecipe;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}


