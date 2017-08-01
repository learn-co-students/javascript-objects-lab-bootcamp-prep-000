/* Creates an empty object called recipes*/
var recipes={}

/* Returns an Object updated with the key and values but without changing the original object.*/
function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key]:value})
}

/* Updates object passed by argument, with key and value provided. Mutates the original Object */
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object,{[key]:value})
}

/* Deletes a key from object, but without changing the original object. */
function deleteFromObjectByKey(object,key){
  return delete Object.assign({},object)[key]
}

/* Deletes a key from object and return the modified object.*/
function destructivelyDeleteFromObjectByKey(object,key){
  return delete object[key]
}
