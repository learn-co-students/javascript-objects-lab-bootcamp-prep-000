var recipes = {};



function updateObjectWithKeyAndValue(object, key, value) {
  return ({}, object, key, value);
}

/* none destructive*/
function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object);
  return Object.assign({}, newObj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
}

/*none destructive*/
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;

}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return recipes;
}
