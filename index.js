var recipes = new Object;

function updateObjectWithKeyAndValue(obj, key, value) {
  let newObj = obj;
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  let obj = Object.create(object);
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}