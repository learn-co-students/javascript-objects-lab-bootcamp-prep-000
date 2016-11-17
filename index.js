var recipes = {};
function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;

  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj2 = Object.assign({}, object);
  delete newObj2[key];
  return newObj2;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
