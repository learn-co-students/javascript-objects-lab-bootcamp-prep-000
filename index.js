var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object); // we should clone the original object to preserve it cause delete operator is destructive
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {

  delete object[key]; // this won't preserve the original passed object so no need to clone it before do delete stuff
  return object;
}
