var recipes = { ingredient1: 'flour' };

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}



function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  // create a new object that's a clone of the passed in object
  var newObj = Object.assign({}, object);
  
  delete newObj[key];
  return newObj;
  
  
}

function destructivelyDeleteFromObjectByKey(object, key) {

  delete object[key];
  return object;
}
