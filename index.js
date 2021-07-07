var recipes = {recipes: 'object'};

function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign ({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
 Object.assign({}, object);
  delete Object.key;
  return Object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object [key];
  return object;
}