var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  
  //return value with the original key value pairs 
  //and the new key value pairs
  
 return Object.assign({}, object, {[key]: value});
 
}

//Updates object with the giving key and value (It is destructive) and //returns the entire updated object 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  object[key] = value;
  
  return object;

}

//deletes key from a clone of object and returns the new object (Non //destructive)
//does not modify the original object (non destructive)

function deleteFromObjectByKey(object, key){
  
  var cloneObject = Object.assign({}, object);
  
  delete cloneObject[key];
  
  return cloneObject;
  
}

////returns object without the delete key/value pair 
//modifies the original object 

function destructivelyDeleteFromObjectByKey(object, key){
  
 delete object[key];
 
 return object;
  
  
}




  
