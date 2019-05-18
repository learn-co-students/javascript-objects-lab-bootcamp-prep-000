var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
var lets = Object.assign({}, object, { [key]: value });
  return lets;

  }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  delete Object.assign({}, object[key] )  ;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete  object[key];
  return object;
}
