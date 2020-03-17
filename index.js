var recipes = new Object;
// None destructive function
function updateObjectWithKeyAndValue(object, key, value) {
   var newobject = Object.assign({}, object, {[key]: value});
  return newobject;
}

// Destructive function
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}


// Non destructive function 
function deleteFromObjectByKey(object, key) {
  var newobj = Object.assign({}, object);
  delete newobj[key];
  return newobj;
}


// Destructive function
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}