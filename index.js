var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
  //return an object with the original key value pairs and the new key value pair
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]= value;
  return object;
}

function deleteFromObjectByKey(object, key){
 var temp = Object.assign({}, object)
 delete temp[key];
 return temp;
}

function destructivelyDeleteFromObjectByKey(object, key){
  //7
  delete object[key];
  return object;
}
/*


  6) Objects  does not modify the original object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:54:7)

  7) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:62:20)

  8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
  
  */