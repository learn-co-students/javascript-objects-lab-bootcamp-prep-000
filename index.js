var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return ( recipes, {prop: 1, prop2: 2});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 console.log("vincent",object);
 object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return {};
}

function destructivelyDeleteFromObjectByKey(object, key) {
 delete object[key];
 return object;  
}