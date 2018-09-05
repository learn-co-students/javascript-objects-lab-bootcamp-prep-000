var recipes = {};

function updateObjectWithKeyAndValue (object, key, value){
  var objects = object;
  objects.key = "value";
  return objects;
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = 'value';
  return object 
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}



