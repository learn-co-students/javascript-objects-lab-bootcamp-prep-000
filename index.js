//
var recipes = {};
// 
function updateObjectWithKeyAndValue(object, key, value){
 return  Object.assign({},object, {[key]:value});
   }
//
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 object[key]=value;
  return object; 
}
//
 function deleteFromObjectByKey(object, key){
 const newobj = Object.assign({}, object);
 
  delete newobj[key];
  
  return newobj;
 }
 
   function destructivelyDeleteFromObjectByKey(object, key){
     delete object[key];
     
     return object;
     
   }
   
 // 1) Objects defines a `recipes` object:

  //    Error: Expected 'undefined' to equal 'object'
    //  + expected - actual
//
  //    -undefined
    //  +object
//
  //    at assert (node_modules/expect/lib/assert.js:29//:9)
      //at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
  //    at Context.<anonymous> (test/index-test.js:5:28)
//
//  2) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
  //   ReferenceError: updateObjectWithKeyAndValue is not defined
    //  at Context.<anonymous> (test/index-test.js:12:7)

  //3) Objects updateObjectWithKeyAndValue(object, key, value) it does not modifythe original object, but rather returns a clone with the new data:
    // ReferenceError: updateObjectWithKeyAndValue is not defined
  //    at Context.<anonymous> (test/index-test.js:21:7)

  //4) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
   //  ReferenceError: destructivelyUpdateObjectWithKeyAndValue is not defined
  //    at Context.<anonymous> (test/index-test.js:31:7)

  //5) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
  //   ReferenceError: deleteFromObjectByKey is not defined
//      at Context.<anonymous> (test/index-test.js:46:20)

  //6) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
  //   ReferenceError: deleteFromObjectByKey is not defined
  //    at Context.<anonymous> (test/index-test.js:54:7)

 // 7) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
  //   ReferenceError: destructivelyDeleteFromObjectByKey is not defined
  //    at Context.<anonymous> (test/index-test.js:62:20)

  //8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
   //  ReferenceError: destructivelyDeleteFromObjectByKey is not defined
   //   at Context.<anonymous> (test/index-test.js:69:20)


  
   
 