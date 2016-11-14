var recipes = new Object(); //using object constructor
//or create object with ---> var recipes = {}


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})  //THink of the multiple parts to understand better.
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;  //This is destructive because we are changing the object and then calling the changed ob
}

function deleteFromObjectByKey(object, key) {
  var newObject = object;
  delete newObject.key;
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object; //Make sure to read the steps, needed to "return" what was deleted.
}
