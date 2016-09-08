var recipes = new Object();

function updateObjectWithKeyAndValue(obj, name, value) {
  var object2 = new Object(obj);
  object2[name] = value;
  return object2;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, name, value) {
  obj[name] = value;
  return obj;
}

function deleteFromObjectByKey(obj, name) {
  var object2 = new Object(obj);

  console.log("a_ ", object2);
  console.log("b_ ", name);
  console.log("b_ ", object2[name]);

  delete object2[name];
  console.log("c_ ", object2);
  return object2;
}

function destructivelyDeleteFromObjectByKey(obj, name) {
  delete obj[name];
  return obj;
}
