// my index.js

/*
define a recipes object and then apply certain updates (destructively and non-destructively) in various functions.
 */
 
var recipes = {
  key: 'value'
}

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
 
 /*
 function deleteFromObjectByKey() {
   return 'destructed object'
 }
  */
 