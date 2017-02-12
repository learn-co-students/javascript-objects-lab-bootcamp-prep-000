//create object recipes
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  // Update the object and pass key/value and stores
  return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  // Update the object and pass key/value to replace
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  //clone the old object into newObject
  var newObject = Object.assign({}, object);
  //delete the clone's key
    delete newObject.key;
  //return the deleted clone    
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}