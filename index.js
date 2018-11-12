/*Objects function
defines a 'recipes' object*/
//function Objects(){
  var recipes = new Object()

  /*updateObjectWithKeyAndValue function
  returns an object with the original key value
  pairs & the new key value pair*/
  function updateObjectWithKeyAndValue(object, key, value){
    return Object.assign({}, object, {[key]: value})
  }

/*destructivelyUpdateObjectWithKeyAndValue function
updates 'object' with the given 'key' and 'value' (it is destructive)
and returns the entire updatedobject*/
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, { [key]: value })
}

/*deleteFromObjectByKey function
deletes 'key' from a clone of object and returns the new
object (it is non-destructive), does not modify the original
object (non destructive)*/
function deleteFromObjectByKey(object, key){
  var obj = {object:key}
  var newObj =  Object.assign({}, obj)
  return newObj

  delete newObj[object]
  return obj
}

/*destructivelyDeleteFromObjectByKey function
returns object without the delete key/value pair
modifies the original object*/
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
