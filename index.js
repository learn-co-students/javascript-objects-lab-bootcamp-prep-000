var recipes = {};

function updateObjectWithKeyAndValue (object, key, value){
  return Object.assign({}, object, { [key]: value });
}


function destructivelyUpdateObjectWithKeyAndValue (obj, key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey (object, key) {
  var newRecipe = Object.assign({}, object);
  return newRecipe;
}

function deleteFromObjectByKey (object, key) {
  var newObj = Object.assign({}, object[key]);
  delete newObj.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey (object, key){
  delete object[key];
  return object;
}
