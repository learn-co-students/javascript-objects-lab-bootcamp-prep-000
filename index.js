var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value){
  // returns a clone; non destructive
  return Object.assign({}, object, {[key]:value})
}

//updateObjectWithKeyAndValue(recipes, "flour", "1 cup")

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  // updates object with given key-value; destructive
  object[key] = value
  return object
}

var deleteFromObjectByKey = function(object, key){
// deletes key from a clone and return the new object; non destructive
var newObj = Object.assign({},object)
delete newObj.key
return object
}

var destructivelyDeleteFromObjectByKey = function(object, key){
  // deletes key and returns object
  delete object[key]
  return object
}
