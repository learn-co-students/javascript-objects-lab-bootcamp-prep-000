var recipes = new Object({"scrambled eggs": "add two eggs, cheddar cheese and ham", "key2": "The second value for key 2"});

function updateObjectWithKeyAndValue(object, key, value){
 return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
 
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object)
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}