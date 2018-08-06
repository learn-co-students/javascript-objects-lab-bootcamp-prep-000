var recipes = {
  test: "test",
  test2: "test2",
  test3: "test3",
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign ( {} , object , {[key]:value} );
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign( {} , object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObject = object;
  delete newObject[key];
  return newObject;
}

console.log(deleteFromObjectByKey(recipes,"test"));
console.log(recipes);