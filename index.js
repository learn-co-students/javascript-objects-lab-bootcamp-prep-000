var recipes = {
};

function updateObjectWithKeyAndValue (object, key, value){
  // returns a new object assigned with original Object
  // and merged with the 2nd & 3rd parameters (non-destructive)
  
  return Object.assign({}, object, { [key] : value });
  
  // object.assign method takes a key-value pair 
  // as parameter with bracket notation, not regular object format
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  // destructively mutates original object because
  // a new empty object was not an argument to be assigned
  // so the original object is assigned the key-value pair
  
  return Object.assign(object, { [key] : value });
}

function deleteFromObjectByKey(obj, key){
  // assign original object to a clone Object
  var newObj = Object.assign({}, obj);
  // utilize bracket notation to access properties via variables
  // the parameter 'key' is a variable
  // so if dot notation is used, then it takes the 'key' paramater as a literal 
  // to find the property of 'key' and not what 'key' is supposed to represent
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  // same deal here, need to utilize bracket notation to access object's key
  // where 'key' is represented as a variable
  // otherwise, dot notation will take the 'key' parameter as a literal property
  delete object[key];
  return object;
}
