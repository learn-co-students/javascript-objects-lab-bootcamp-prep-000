//define recipes object
var recipes = { };

//return a clone of 'object' by adding 'key' and 'value'
//non-destructive.
function updateObjectWithKeyAndValue(object, key, value){
  //merge everything into new object without affecting original.
  return Object.assign({}, object,{[key]:value})
}

//updates object with given key and value
//destructive.
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //pass key and value to orininal object
  object[key] = value;
  return object;
}

//delete key from clone of object and returns the new object
//non-destructive
function deleteFromObjectByKey(object, key){
  //create new copy of object. 
  var a = Object.assign({}, object);
  delete a.key;
  return a;
}

//Deletes key from orignial object and returns object
//destructive
function destructivelyDeleteFromObjectByKey(object,key){
delete object.key;
return object;
}