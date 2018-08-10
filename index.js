// my index.js

/*
define a recipes object and then apply certain updates (destructively and non-destructively) in various functions.
 */

/*
HINT: You might find deleteFromObjectByKey to be a bit hard to write non-destructively. Think about how we learned to use Object.assign. What happens if we do

var obj = { foo: 'bar' }
 
var newObj = Object.assign({}, obj)
 
newObj // { foo: 'bar' }
 
delete newObj.foo // true
 
newObj // {}
 
obj // { foo: 'bar' }

Hmmmmm...
 */
 
/* no active code test results
// ♥ learn

> javascript-objects-lab@0.1.0 test /home/FSGh2018/javascript-objects-lab-bootcamp-prep-000
> mocha -R mocha-multi --reporter-options nyan=-,json=.results.json

 0   -_,------,
 8   -_|   /\_/\
 0   -^|__( x .x)
     -  ""  ""

  0 passing (534ms)
  8 failing

  1) Objects defines a `recipes` object:

      Error: Expected 'undefined' to equal 'object'
      + expected - actual

      -undefined
      +object

      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toEqual (node_modules/expect/lib/Expectation.js:81:30)
      at Context.<anonymous> (test/index-test.js:5:28)

  2) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
     ReferenceError: updateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:12:7)

  3) Objects updateObjectWithKeyAndValue(object, key, value) it does not modifythe original object, but rather returns a clone with the new data:
     ReferenceError: updateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:21:7)

  4) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
     ReferenceError: destructivelyUpdateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:31:7)

  5) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:46:20)

  6) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:54:7)

  7) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:62:20)

  8) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:69:20)



npm ERR! Test failed.  See above for more details.
[12:30:58] (master) javascript-objects-lab-bootcamp-prep-000
// ♥
 */
 
/*  
var recipes = {
  key1: 'value1'
}
 */
/*
function updateObjectWithKeyAndValue(object, key, value) {
//  returns an object with the orignal key value pairs and the new key value pair
  object[key] = value
  return object
}
 */

function UpdateObjectWithKeyAndValue(object, key, value) {
//  it does not modifythe original object, but rather returns a clone with the new data
}

 
 /*
 function deleteFromObjectByKey() {
   return 'destructed object'
 }
  */
 