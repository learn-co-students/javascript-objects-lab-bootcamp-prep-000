// declares global variable recipes with as empty object.
var recipes = {};

// paramter function, use object assign to create empty object and fill with passed paramter object and add new key vaue pair from passed paramter. Functions output is return the original passed object and modified new object
function updateObjectWithKeyAndValue(object, key, value) {
   var obj = Object.assign({}, object, { [key]: value });
   return object, obj;
 }
 //destructively changes object by directly modifying key value pair with bracket notation. Not sure I need to pass as a string but use direct ticks to still reference paramter, returns modified original object paramter
 function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
   object[`${key}`] = `${value}`;
   return object;
 }
 
 //creates a new local variable that is an empty object to be filled by an object paramter. Deletes a key value pair based on passed key paramter and then returns the new object.
 function  deleteFromObjectByKey(object, key){
   var obj= Object.assign({}, object);
   delete obj[`${key}`];
   return obj;
 }
 
 //directly and destructively deletes the key value pair with bracket notation and returns the original and now modified object.
 function destructivelyDeleteFromObjectByKey(object, key){
   delete object[key];
   return object;
 }