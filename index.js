
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = object[key]= value;
  return object, newObject
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign( object, {key: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value
  return object
}
/*
function deleteFromObjectByKey(object, key){

}

function destructivelyDeleteFromObjectByKey(object, key){

}
