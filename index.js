var recipes = {
  butter: "1/2 Cup"
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var pls = {object: key}
  var newObj = Object.assign({}, pls);
  delete newObj.pls;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
   delete object.key;
   return object;
}
