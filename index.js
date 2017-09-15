//   1) Objects defines a `recipes` object:
     var recipes = {};


//   2) Objects updateObjectWithKeyAndValue(object, key, value)
//   returns a clone of `object` by adding `key` and `value`
//   (it is non-destructive):
     function updateObjectWithKeyAndValue(object, key, value) {
       return Object.assign({}, object, { [ key ]: value });
     };


//   3) Objects destructivelyUpdateObjectWithKeyAndValue(
//   object, key, value) updates `object` with the given
//   `key` and `value` (it is destructive):
     function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
       object[key] = value;
       return object;
     };


//   4) Objects deleteFromObjectByKey(object, key)
//   deletes `key` from a clone of object and returns the new object
//   (it is non-destructive):
     function deleteFromObjectByKey (object, key) {
       var newObject = Object.assign({}, object);
       delete newObject.key;
       return newObject;
     };


//   5) Objects destructivelyDeleteFromObjectByKey(object, key)
//   deletes `key` from object and returns object:
     function destructivelyDeleteFromObjectByKey (object, key) {
       delete object.key;
       return object;
     };
