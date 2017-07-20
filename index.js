var recipes = {garlic: 3, onion: 4};

function updateObjectWithKeyAndValue(object, ingredient, value){
  return Object.assign({}, object, {[ingredient]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, ingredient, value){
  object[ingredient]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
