//function Objects() {
    var recipes = new Object();
  //  return recipes;
//}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj1 = {};
  obj1[key] = value;
  return Object.assign(object, obj1);

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var obj1 = Object.assign({}, object);
  delete obj1[key];
  return obj1;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
