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
 
  
var recipes = {
  key1: 'value1'
}

function updateObjectWithKeyAndValue(object, key, value) {
//  returns an object with the orignal key value pairs and the new key value pair
  object[key] = value
  return object
}
 /*
 function deleteFromObjectByKey() {
   return 'destructed object'
 }
  */
 