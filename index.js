var recipes = {}

function updateObjectWithKeyAndValue(object,key,value){
     object[key]= value;
     return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
         object[key]=value
         return object
}

function destructivelyDeleteFromObjectByKey (object,key){
  delete object[key]
  return object
}

function deleteFromObjectByKey(object,key){
  var newObj = Object.assign({}, object)
  return newObj
}


/*
updateObjectWithKeyAndValue(object, key, value)

Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructi
ve):

Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object and returns the new object (it is non-destructive):

Objects destructivelyDeleteFromObjectByKey(object, key) deletes `key` from object and returns object:

**HINT**: You might find `deleteFromObjectByKey` to be a bit hard to write non-destructively. Think about how we learned to use `Object.assign`. What happens if we do

``` javascript
var obj = { foo: 'bar' }

var newObj = Object.assign({}, obj)

newObj // { foo: 'bar' }

delete newObj.foo // true

newObj // {}

obj // { foo: 'bar' }
```
*/
