//define 'recipes' object
var recipes = {};

//non-destructively returns a clone of 'recipes' by adding 'key' and 'value'
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

//destructively updates 'recipes' with 'key' and 'value'
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}


//non-destructively deletes 'key' from a clone of 'recipes' and returns new object
function deleteFromObjectByKey(object, key){
  const newObj = Object.assign({}, object)
  delete newObj.key //or delete newObj[key]
  return newObj
}

//destructively deletes 'key' from 'recipes' and returns object
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
