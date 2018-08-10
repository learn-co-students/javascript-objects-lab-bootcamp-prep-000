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
 
/* test1 results before coding starts
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
 
 
var recipes = {
  key1: 'value1'
}

 
 /* test 2 results: error 1) and 2) have same function name
// ♥ learn

> javascript-objects-lab@0.1.0 test /home/FSGh2018/javascript-objects-lab-bootcamp-prep-000
> mocha -R mocha-multi --reporter-options nyan=-,json=.results.json

 1   -_,------,
 7   -_|   /\_/\
 0   -^|__( x .x)
     -  ""  ""

  1 passing (533ms)
  7 failing

  1) Objects updateObjectWithKeyAndValue(object, key, value) returns an object with the orignal key value pairs and the new key value pair:
     ReferenceError: updateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:12:7)

  2) Objects updateObjectWithKeyAndValue(object, key, value) it does not modifythe original object, but rather returns a clone with the new data:
     ReferenceError: updateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:21:7)

  3) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
     ReferenceError: destructivelyUpdateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:31:7)

  4) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:46:20)

  5) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:54:7)

  6) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:62:20)

  7) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:69:20)



npm ERR! Test failed.  See above for more details.
[12:39:29] (master) javascript-objects-lab-bootcamp-prep-000
// ♥
 */
  

function updateObjectWithKeyAndValue(object, key, value) {
// returns an object with the orignal key value pairs and the new key value pair
  object[key] = value
  return object
}


/* test 3 results: error 1) still has same function name as my 1st function that passed
// ♥ learn

> javascript-objects-lab@0.1.0 test /home/FSGh2018/javascript-objects-lab-bootcamp-prep-000
> mocha -R mocha-multi --reporter-options nyan=-,json=.results.json

 2   -_,------,
 6   -_|   /\_/\
 0   -^|__( x .x)
     -  ""  ""

  2 passing (548ms)
  6 failing

  1) Objects updateObjectWithKeyAndValue(object, key, value) it does not modifythe original object, but rather returns a clone with the new data:
     Error: Expected 2 to be undefined
      at assert (node_modules/expect/lib/assert.js:29:9)
      at Expectation.toBe (node_modules/expect/lib/Expectation.js:66:28)
      at Context.<anonymous> (test/index-test.js:23:28)

  2) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
     ReferenceError: destructivelyUpdateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:31:7)

  3) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:46:20)

  4) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:54:7)

  5) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:62:20)

  6) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:69:20)



npm ERR! Test failed.  See above for more details.
[12:45:24] (master) javascript-objects-lab-bootcamp-prep-000
// ♥
[12:45:34] (master) javascript-objects-lab-bootcamp-prep-000
// ♥
 */
 

function updateObjectWithKeyAndValue(object, key, value) {
// it does not modifythe original object, but rather returns a clone with the new data
 
  var newObject = Object.assign({}, object)

  newObject[key] = value
  return newObject
}


/* test 4 results: my 1st passed function and my new 2nd function with the same name are passing!!! WITH NO DUPLICATE NAME ERROR!!
// ♥ learn

> javascript-objects-lab@0.1.0 test /home/FSGh2018/javascript-objects-lab-bootcamp-prep-000
> mocha -R mocha-multi --reporter-options nyan=-,json=.results.json

 3   -_,------,
 5   -_|   /\_/\
 0   -^|__( x .x)
     -  ""  ""

  3 passing (592ms)
  5 failing

  1) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object:
     ReferenceError: destructivelyUpdateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:31:7)

  2) Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:46:20)

  3) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:54:7)

  4) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:62:20)

  5) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:69:20)



npm ERR! Test failed.  See above for more details.
[13:14:39] (master) javascript-objects-lab-bootcamp-prep-000
// ♥
 */

// CONTINUE WITH LAB BEFORE Ask a Question ABOUT DUPLICATE FUNCTION NAMES ABOVE
 
 
 
/* my stub based on info in lesson
 function deleteFromObjectByKey() {
   return 'destructed object'
 }
  */
 