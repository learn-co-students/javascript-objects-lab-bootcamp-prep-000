
//returns an object with the orignal key value pairs and the new key value pair
//does not modify the original object, but rather returns a clone with the new data
//returns an object with an updated key value pair
function updateObjectWithKeyAndValue(object, key, value){

  return Object.assign({}, object, { [key]: value });
   
}


//updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  object[key] = value;
  return object;
  
}



//deletes `key` from a clone of object and returns the new object (it is non-destructive)
//does not modify the original object (it is non-destructive)
function deleteFromObjectByKey(object, key){
  
  var object = { object: key };
  var newObject = Object.assign({}, object);
  delete newObject.key;
  return newObject;
  
}



//returns object without the delete key/value pair
//modifies the original object
function destructivelyDeleteFromObjectByKey(object, key){
  

  delete object[key];
  return object;
  
}




