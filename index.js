var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  //TODO: write code returns a clone of `object` by adding `key`
  //and `value` (it is non-destructive)
  var recipes = Object.assign({}, object, {[key]:value});//need [] when referencing key for key:value
  return recipes;
  //Error: Expected { key: 'prop2', value: 2 } to match { prop: 1, prop2: 2 } - old
  //Error: Expected { key: 2, prop: 1 } to match { prop: 1, prop2: 2 }
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  //TODO: write code updates `object` with the given `key`
  // and `value` (it is destructive)
  object[key] = value;
  return object;
  //Error: Expected { key: 2 } to match { prop: 1, prop2: 2 }
}

//This one is good
function deleteFromObjectByKey(object, key) {
  var recipes = Object.assign({}, recipes);
  delete recipes[key];
  return recipes;
}
//This one is good
function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes[key];
  return recipes;
}
